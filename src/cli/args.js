// TASK
// args.js - implement function that parses command line arguments 
// (given in format --propName value --prop2Name value2, you don't need to validate it) 
// and prints them to the console in the format propName is value, prop2Name is value2

const PREFIX = '--';

const parseArgs = () => {
	const formattedArgumentsArray = process.argv.reduce((result, argument, index, argumentsArr) => {
		if (argument.startsWith(PREFIX)) {
			const formattedArgument = `${argument.replace(PREFIX, '')} is ${argumentsArr[index + 1]}`;
			return [...result, formattedArgument];
		}
		return result;
	}, []);

	const formattedArgumentsString = formattedArgumentsArray.join(', ');
	console.log(formattedArgumentsString);
};

parseArgs();