const sendToken = (user, status, res) => {
    const token = user.getJWTToken();
    res.status(status).cookie('token', token).json({
        success: true,
        user,
        token,
    })
}

module.exports = sendToken;