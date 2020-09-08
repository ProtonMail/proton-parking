export default function isTruthy<T>(t: T | undefined | null | void | false | number): t is T {
    return !!t;
}

/**
 * Join CSS classes into string for className prop
 */
export const classnames = (classNames: (string | boolean | null | undefined)[] = []) => {
    return classNames.filter(isTruthy).join(' ').trim();
};