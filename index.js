const yargs = require('yargs');

yargs
	.command('current', 'get current date', (yargs) => {
		yargs
			.option('Year', {
				describe: 'Year',
				alias: 'y',
				type: 'boolean',
			})
			.option('Month', {
				describe: 'Month',
				alias: 'm',
				type: 'boolean',
			})
			.option('Day', {
				describe: 'Day',
				alias: 'd',
				type: 'boolean',
			});
	}, (argv) => {
		if (argv.Year) {
			console.log(new Date().getFullYear());
		} else if (argv.Month) {
			console.log(new Date().getMonth() + 1);
		} else if (argv.Day) {
			console.log(new Date().getDate());
		} else {
			console.log(new Date().toISOString());
		}
	})
	.command('add', 'add time', (yargs) => {
		yargs
      .option('year', {
        describe: 'Year',
        alias: 'y',
        type: 'number',
      })
			.option('month', {
				describe: 'Month',
				alias: 'm',
				type: 'number',
			})
			.option('day', {
				describe: 'Day',
				alias: 'd',
				type: 'number',
			});
	}, (argv) => {
		const currentDate = new Date();
		const { year = 0, month = 0, day = 0 } = argv;
    currentDate.setYear(currentDate.getFullYear() + year);
		currentDate.setMonth(currentDate.getMonth() + month);
		currentDate.setDate(currentDate.getDate() + day);
		console.log(currentDate.toISOString());
	})
	.command('sub', 'subtract time', (yargs) => {
		yargs
      .option('year', {
        describe: 'Year',
        alias: 'y',
        type: 'number',
      })
			.option('month', {
				describe: 'Month',
				alias: 'm',
				type: 'number',
			})
			.option('day', {
				describe: 'Day',
				alias: 'd',
				type: 'number',
			});
	}, (argv) => {
		const currentDate = new Date();
		const { year = 0, month = 0, day = 0 } = argv;
    currentDate.setYear(currentDate.getFullYear() - year);
		currentDate.setMonth(currentDate.getMonth() - month);
		currentDate.setDate(currentDate.getDate() - day);
		console.log(currentDate.toISOString());
	})
	.help()
	.argv;