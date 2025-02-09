const ERROR_CODES = {
    INVALID_LOGIN_OR_PASSWORD: 'Неверный логин или пароль'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}