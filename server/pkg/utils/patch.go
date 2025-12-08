package utils

import (
	"errors"
	"reflect"
)

func Patch(dst, src interface{}) error {
	dv := reflect.ValueOf(dst)
	sv := reflect.ValueOf(src)
	if dv.Kind() != reflect.Ptr || sv.Kind() != reflect.Ptr {
		return errors.New("dst and src must be pointers to structs")
	}
	dv = dv.Elem()
	sv = sv.Elem()
	if dv.Kind() != reflect.Struct || sv.Kind() != reflect.Struct {
		return errors.New("dst and src must point at structs")
	}

	st := sv.Type()
	for i := 0; i < sv.NumField(); i++ {
		sf := st.Field(i)
		fv := sv.Field(i)
		// only consider pointer fields on source that are non-nil
		if fv.Kind() == reflect.Ptr && !fv.IsNil() {
			df := dv.FieldByName(sf.Name)
			if !df.IsValid() || !df.CanSet() {
				continue
			}

			val := fv.Elem() // underlying value from source pointer

			switch df.Kind() {
			case reflect.Ptr:
				// destination expects a pointer -> create new pointer and set its elem
				elemType := df.Type().Elem()
				newPtr := reflect.New(elemType)
				// assign if types are compatible
				if val.Type().AssignableTo(elemType) {
					newPtr.Elem().Set(val)
					df.Set(newPtr)
				} else if val.Type().ConvertibleTo(elemType) {
					newPtr.Elem().Set(val.Convert(elemType))
					df.Set(newPtr)
				} else {
					// incompatible types
					continue
				}
			default:
				// destination is non-pointer -> set value directly if compatible
				if val.Type().AssignableTo(df.Type()) {
					df.Set(val)
				} else if val.Type().ConvertibleTo(df.Type()) {
					df.Set(val.Convert(df.Type()))
				} else {
					// incompatible types; skip
					continue
				}
			}
		}
	}
	return nil
}
