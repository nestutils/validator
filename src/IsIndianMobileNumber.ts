import { buildMessage, ValidateBy } from 'class-validator'

const VALIDATION_REGEX = /^(\+?91|0)?[6789]\d{9}$/

/**
 * Checks if a string is a valid Indian Mobile Number or not.
 * If given value is not a valid Indian Mobile Number, returns false.
 */
export function isIndianMobileNumber(value: unknown): boolean {
    return typeof value === 'string' && VALIDATION_REGEX.test(value)
}

/**
 * Checks if a string is a valid Indian Mobile Number or not.
 * If given value is not a valid Indian Mobile Number, returns false.
 */
export function IsIndianMobileNumber(ValidationOptions = {}): PropertyDecorator {
    return ValidateBy(
        {
            name: 'IsIndianMobileNumber',
            validator: {
                validate: (value): boolean => isIndianMobileNumber(value),
                defaultMessage: buildMessage(
                    eachPrefix => eachPrefix + '$property must be a valid indian mobile number',
                    ValidationOptions
                )
            }
        },
        ValidationOptions
    )
}
