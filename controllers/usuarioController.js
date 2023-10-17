const formularioLogin = (req, res) => {
    res.render('auth/login', {
        title: 'Iniciar Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        title: 'Crear Cuenta'
    })
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvidePassword', {
        title: "Recupera tu acceso a Bienes Raíces"
    })
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
}