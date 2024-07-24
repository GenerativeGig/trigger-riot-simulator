let cycleLength = 255;

const setCycleLengthButton = document.getElementById('setCycleLength');

setCycleLengthButton.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(document.forms.setCycleLengthForm);
  const cycleLengthFormDataEntryValue = formData.get('cycleLength');
  cycleLength = Number(cycleLengthFormDataEntryValue.toString());

  const divideSliders = document.getElementsByClassName('divide');

  for (divideSlider of divideSliders) {
    divideSlider.setAttribute('max', cycleLength);
  }
});

const simulateButton = document.getElementById('simulate');
simulateButton.addEventListener('click', (event) => {
  event.preventDefault();

  const simulationContainerCombined = document.getElementById(
    'simulation-container-combined'
  );
  simulationContainerCombined.innerHTML = '';
  const simulationContainerDivide1 = document.getElementById(
    `simulation-container-divide1`
  );
  simulationContainerDivide1.innerHTML = '';
  const simulationContainerDivide2 = document.getElementById(
    `simulation-container-divide2`
  );
  simulationContainerDivide2.innerHTML = '';
  const simulationContainerDivide3 = document.getElementById(
    `simulation-container-divide3`
  );
  simulationContainerDivide3.innerHTML = '';
  const simulationContainerDivide4 = document.getElementById(
    `simulation-container-divide4`
  );
  simulationContainerDivide4.innerHTML = '';

  const formData = new FormData(document.forms.simulateForm);
  const stepsCombined = Array(cycleLength).fill(false);

  for (const [key, divisionFormDataEntryValue] of formData.entries()) {
    const division = Number(divisionFormDataEntryValue.toString());

    const stepsForDivision = Array(cycleLength).fill(false);

    const simulationContainerForDivider = document.getElementById(
      `simulation-container-${key}`
    );

    if (division <= 0) {
      stepsForDivision.forEach((isStep) => {
        if (isStep) {
          const stepElement = document.createElement('div');
          stepElement.className = 'active-step';
          simulationContainerForDivider.appendChild(stepElement);
        } else {
          const stepElement = document.createElement('div');
          stepElement.className = 'inactive-step';
          simulationContainerForDivider.appendChild(stepElement);
        }
      });
      continue;
    }

    for (let i = division - 1; i < stepsCombined.length; i += division) {
      stepsCombined[i] = true;
      stepsForDivision[i] = true;
    }

    stepsForDivision.forEach((isStep) => {
      if (isStep) {
        const stepElement = document.createElement('div');
        stepElement.className = 'active-step';
        simulationContainerForDivider.appendChild(stepElement);
      } else {
        const stepElement = document.createElement('div');
        stepElement.className = 'inactive-step';
        simulationContainerForDivider.appendChild(stepElement);
      }
    });
  }

  stepsCombined.forEach((isStep) => {
    if (isStep) {
      const stepElement = document.createElement('div');
      stepElement.className = 'active-step';
      simulationContainerCombined.appendChild(stepElement);
    } else {
      const stepElement = document.createElement('div');
      stepElement.className = 'inactive-step';
      simulationContainerCombined.appendChild(stepElement);
    }
  });
});
