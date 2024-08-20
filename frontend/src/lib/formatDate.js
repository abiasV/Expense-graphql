export function formatDate(timestamp) {
	const date = new Date(parseInt(timestamp)); // Parse the timestamp to ensure it's an integer representing milliseconds
	const options = { day: "2-digit", month: "short", year: "numeric", timeZone: 'UTC' };
	return date.toLocaleDateString("en-US", options);
}

// Example usage:
const timestamp = "1722470400000";
const formattedDate = formatDate(timestamp);
console.log(formattedDate); // Output: "Jul 31, 2024"




// date: new Date(+data.transaction.date).toISOString().slice(0, 10) // another way to get timestamp and convert to date