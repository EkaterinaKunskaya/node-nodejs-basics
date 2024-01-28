// TASK
// env.js - implement function that parses environment variables with prefix 'RSS_' and
// prints them to the console in the format 'RSS_name1=value1'; 'RSS_name2=value2'

const PREFIX = 'RSS_';

const parseEnv = () => {
    const formattedArgumentsArray = Object.entries(process.env).reduce((result, [key, value]) => {
        if (key.startsWith(PREFIX)) {
            const formattedArgument = `${key}=${value}`;
            return [...result, formattedArgument];
        }
        return result;
    }, []);

    const formattedArgumentsString = formattedArgumentsArray.join('; ');
    console.log(formattedArgumentsString);
};

parseEnv();