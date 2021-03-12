const stringCompare = (str1, str2) => {
	str1 = str1.toLowerCase()
	str2 = str2.toLowerCase()

	if (str1 > str2) return 1
	if (str2 > str1) return -1
	return 0
}
const numCompare = (num1, num2) => num1 - num2

export const sortFunction = (newArray, key) => {
	const dataType = typeof newArray[0][key]
	const sortArray = (a, b) => {
		a = a[key]
		b = b[key]
		if (dataType === "string") return stringCompare(a, b)
		if (dataType === "number") return numCompare(a, b)
	}
	return sortArray
}
