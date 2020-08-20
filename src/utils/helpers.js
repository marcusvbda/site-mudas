export const getIsMobile = ctx => {
    const { req } = ctx
    let userAgent
    if (req) userAgent = req.headers['user-agent'] // get the user-agent from the headers
    else userAgent = navigator.userAgent
    return Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))
}
