const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
    // for loop method
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('==================');

    // forEach method
    profileDataArr.forEach((profileItem) => console.log(profileItem));

    // both produce same result!
};

printProfileData(profileDataArgs);