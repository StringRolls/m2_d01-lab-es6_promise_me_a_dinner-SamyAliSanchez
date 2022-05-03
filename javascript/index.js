// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    getInstruction(
                      "mashedPotatoes",
                      4,
                      () => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>"Mashed potatoes are ready!"</li>`;
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })

  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then(() => obtainInstruction("steak", 7))
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>"Stake is ready!"</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });
// Iteration 3 using async/await
async function makeBroccoli() {
  let html = document.querySelector("#broccoli");
  try {
    html.innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
    html.innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
    html.innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
    html.innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
    html.innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
    html.innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
    html.innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
    html.innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log("Broccoli error", err);
  }
}
makeBroccoli();

const prom1 = obtainInstruction("brusselsSprouts", 0);
const prom2 = obtainInstruction("brusselsSprouts", 1);
const prom3 = obtainInstruction("brusselsSprouts", 2);
const prom4 = obtainInstruction("brusselsSprouts", 3);
const prom5 = obtainInstruction("brusselsSprouts", 4);
const prom6 = obtainInstruction("brusselsSprouts", 5);
const prom7 = obtainInstruction("brusselsSprouts", 6);
const prom8 = obtainInstruction("brusselsSprouts", 7);

Promise.all([prom1, prom2, prom3, prom4, prom5, prom6, prom7, prom8]).then(
  (arr) => {
    arr.forEach((value) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${value}</li>`;
    });
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
  }
);
