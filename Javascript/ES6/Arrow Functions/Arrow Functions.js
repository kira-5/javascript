//
function logArguments() {
	console.log(arguments); // Logs arguments passed to logArguments
}

const logArguments = () => {
	console.log(arguments); // ReferenceError: arguments is not defined
};

logArguments(1, 2, 3); // Logs [1, 2, 3]
