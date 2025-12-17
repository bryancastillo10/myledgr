package email

const ResetPasswordTemplate = `
	<div style="font-family: Arial, sans-serif; line-height:1.6; color: #545454;">
        <h1 style="font-size: 24px; font-weight: bold; color:#d417ff">
            MyLedgr App Password Reset
        </h1>
        <p style="font-size:16px; margin-bottom:10px">
            Your verification code is
            <strong style="font-size: 18px; color:#d417ff;">%s</strong>
        </p>
        <p style="font-size: 14px; margin-bottom: 20px;">
            The code expires in <strong>5 minutes</strong> after this email was sent.
        </p>
        <p style="font-size: 14px;">
            Enter the code in the reset password section of the app to reset your password.
        </p>
        <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;">
        <p style="font-size: 12px; color: #999;">
            If you did not request a password reset, please ignore this email.
        </p>
    </div>`