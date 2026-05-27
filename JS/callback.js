function f1(callback) {
    console.log("f1 is called");
    setTimeout(() => {
        console.log("f1 setTime is called");
        callback();
    }, 3000);
}

function f2(callback) {
    console.log("f2 is called");
    setTimeout(() => {
        console.log("f2 setTime is called");
        callback();
    }, 2000);
}


function f3(callback) {
    console.log("f3 is called");
    setTimeout(() => {
        console.log("f3 setTime is called");
        callback();
    }, 1000);
}

function f4() {
    console.log("f4 is called");
    setTimeout(() => {
        console.log("f4 setTime is called");
    }, 2000);
}

// AIM: Out goal is to call f1 first then when f1 is done then call f2 and when f2 is
// done then call f3 and when f3 is done then call f4. --> callback hell
f1(() => {
    f2(() => {
        f3(() => {
            f4();
        });
    });
});
