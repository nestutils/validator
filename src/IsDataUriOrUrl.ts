import { buildMessage, isDataURI, isURL, ValidateBy } from 'class-validator'

/**
 * Checks if a string is either a data uri or a URL.
 * If given value is not a data uri and not a URL, returns false.
 */
export function isDataUriOrUrl(value: unknown): boolean {
    return typeof value === 'string' && (isDataURI(value) || isURL(value))
}

/**
 * Checks if a string is valid data URI or url.
 * If given value is neither a data uri, nor a url, return false.
 */
export function IsDataUriOrUrl(ValidationOptions = {}): PropertyDecorator {
    return ValidateBy(
        {
            name: 'IsDataUriOrUrl',
            validator: {
                validate: (value, args): boolean => isDataUriOrUrl(value),
                defaultMessage: buildMessage(
                    eachPrefix =>
                        eachPrefix +
                        '$property must be either a valid data uri or a http/https url',
                    ValidationOptions
                )
            }
        },
        ValidationOptions
    )
}
