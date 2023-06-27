function showConverter(converter) {
    // Hide all sections
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
  
    // Show the selected converter
    document.getElementById(converter).style.display = 'block';
  }
  
  function convertLength() {
    const input = parseFloat(document.getElementById('length-input').value);
    const selectFrom = document.getElementById('length-select-from');
    const selectTo = document.getElementById('length-select-to');
    const unitFrom = selectFrom.value;
    const unitTo = selectTo.value;
    let result;
  
    if (unitFrom === unitTo) {
      result = input;
    } else if (unitFrom === 'meter') {
      if (unitTo === 'kilometer') {
        result = input / 1000;
      } else if (unitTo === 'miles') {
        result = input * 0.000621371;
      } else if (unitTo === 'foot') {
        result = input * 3.28084;
      }
    } else if (unitFrom === 'kilometer') {
      if (unitTo === 'meter') {
        result = input * 1000;
      } else if (unitTo === 'miles') {
        result = input * 0.621371;
      } else if (unitTo === 'foot') {
        result = input * 3280.84;
      }
    } else if (unitFrom === 'miles') {
      if (unitTo === 'meter') {
        result = input / 0.000621371;
      } else if (unitTo === 'kilometer') {
        result = input / 0.621371;
      } else if (unitTo === 'foot') {
        result = input * 5280;
      }
    } else if (unitFrom === 'foot') {
      if (unitTo === 'meter') {
        result = input / 3.28084;
      } else if (unitTo === 'kilometer') {
        result = input / 3280.84;
      } else if (unitTo === 'miles') {
        result = input / 5280;
      }
    }
  
    document.getElementById('length-result').textContent = result;
  }
  
  function convertTemperature() {
    const input = parseFloat(document.getElementById('temperature-input').value);
    const selectFrom = document.getElementById('temperature-select-from');
    const selectTo = document.getElementById('temperature-select-to');
    const unitFrom = selectFrom.value;
    const unitTo = selectTo.value;
    let result;
  
    if (unitFrom === unitTo) {
      result = input;
    } else if (unitFrom === 'celsius') {
      if (unitTo === 'fahrenheit') {
        result = (input * 9/5) + 32;
      } else if (unitTo === 'kelvin') {
        result = input + 273.15;
      }
    } else if (unitFrom === 'fahrenheit') {
      if (unitTo === 'celsius') {
        result = (input - 32) * 5/9;
      } else if (unitTo === 'kelvin') {
        result = (input + 459.67) * 5/9;
      }
    } else if (unitFrom === 'kelvin') {
      if (unitTo === 'celsius') {
        result = input - 273.15;
      } else if (unitTo === 'fahrenheit') {
        result = (input * 9/5) - 459.67;
}
}

document.getElementById('temperature-result').textContent = result;
}

function convertWeight() {
const input = parseFloat(document.getElementById('weight-input').value);
const selectFrom = document.getElementById('weight-select-from');
const selectTo = document.getElementById('weight-select-to');
const unitFrom = selectFrom.value;
const unitTo = selectTo.value;
let result;

if (unitFrom === unitTo) {
result = input;
} else if (unitFrom === 'kilogram') {
if (unitTo === 'gram') {
result = input * 1000;
} else if (unitTo === 'pound') {
result = input * 2.20462;
} else if (unitTo === 'ounce') {
result = input * 35.274;
}
} else if (unitFrom === 'gram') {
if (unitTo === 'kilogram') {
result = input / 1000;
} else if (unitTo === 'pound') {
result = input * 0.00220462;
} else if (unitTo === 'ounce') {
result = input * 0.035274;
}
} else if (unitFrom === 'pound') {
if (unitTo === 'kilogram') {
result = input * 0.453592;
} else if (unitTo === 'gram') {
result = input * 453.592;
} else if (unitTo === 'ounce') {
result = input * 16;
}
} else if (unitFrom === 'ounce') {
if (unitTo === 'kilogram') {
result = input * 0.0283495;
} else if (unitTo === 'gram') {
result = input * 28.3495;
} else if (unitTo === 'pound') {
result = input * 0.0625;
}
}

document.getElementById('weight-result').textContent = result;
}

function convertTime() {
const input = parseFloat(document.getElementById('time-input').value);
const selectFrom = document.getElementById('time-select-from');
const selectTo = document.getElementById('time-select-to');
const unitFrom = selectFrom.value;
const unitTo = selectTo.value;
let result;

if (unitFrom === unitTo) {
result = input;
} else if (unitFrom === 'second') {
if (unitTo === 'minute') {
result = input / 60;
} else if (unitTo === 'hour') {
result = input / 3600;
} else if (unitTo === 'day') {
result = input / 86400;
}
} else if (unitFrom === 'minute') {
if (unitTo === 'second') {
result = input * 60;
} else if (unitTo === 'hour') {
result = input / 60;
} else if (unitTo === 'day') {
result = input / 1440;
}
} else if (unitFrom === 'hour') {
if (unitTo === 'second') {
result = input * 3600;
} else if (unitTo === 'minute') {
result = input * 60;
} else if (unitTo === 'day') {
result = input / 24;
}
} else if (unitFrom === 'day') {
if (unitTo=== 'second') {
result = input * 86400;
} else if (unitTo === 'minute') {
result = input * 1440;
} else if (unitTo === 'hour') {
result = input * 24;
}
}

document.getElementById('time-result').textContent = result;
}

// Function to convert volume
function convertVolume() {
    const input = parseFloat(document.getElementById('volume-input').value);
    const unitFrom = document.getElementById('volume-select-from').value;
    const unitTo = document.getElementById('volume-select-to').value;
    let result;
  
    if (unitFrom === unitTo) {
      result = input;
    } else if (unitFrom === 'liter') {
      if (unitTo === 'milliliter') {
        result = input * 1000;
      } else if (unitTo === 'gallon') {
        result = input * 0.264172;
      } else if (unitTo === 'fluidounce') {
        result = input * 33.814;
      }
    } else if (unitFrom === 'milliliter') {
      if (unitTo === 'liter') {
        result = input / 1000;
      } else if (unitTo === 'gallon') {
        result = input * 0.000264172;
      } else if (unitTo === 'fluidounce') {
        result = input * 0.033814;
      }
    } else if (unitFrom === 'gallon') {
      if (unitTo === 'liter') {
        result = input * 3.78541;
      } else if (unitTo === 'milliliter') {
        result = input * 3785.41;
      } else if (unitTo === 'fluidounce') {
        result = input * 128;
      }
    } else if (unitFrom === 'fluidounce') {
      if (unitTo === 'liter') {
        result = input * 0.0295735;
      } else if (unitTo === 'milliliter') {
        result = input * 29.5735;
      } else if (unitTo === 'gallon') {
        result = input * 0.0078125;
      }
    }
  
    document.getElementById('volume-result').textContent = result;
  }

// Event listeners for conversion buttons
document.getElementById('length-convert-btn').addEventListener('click', convertLength);
document.getElementById('temperature-convert-btn').addEventListener('click', convertTemperature);
document.getElementById('weight-convert-btn').addEventListener('click', convertWeight);
document.getElementById('time-convert-btn').addEventListener('click', convertTime);
document.getElementById('volume-convert-btn').addEventListener('click', convertVolume);

// Show the length converter by default
showConverter('length');
  