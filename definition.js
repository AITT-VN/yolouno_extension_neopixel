var digitalPins = [
  [
    "D3",
    "D3"
  ],
  [
    "D4",
    "D4"
  ],
  [
    "D5",
    "D5"
  ],
  [
    "D6",
    "D6"
  ],
  [
    "D7",
    "D7"
  ],
  [
    "D8",
    "D8"
  ],
  [
    "D9",
    "D9"
  ],
  [
    "D10",
    "D10"
  ],
  [
    "D11",
    "D11"
  ],
  [
    "D12",
    "D12"
  ],
  [
    "D13",
    "D13"
  ],
  [
    "D0",
    "D0"
  ],
  [
    "D1",
    "D1"
  ],
  [
    "D2",
    "D2"
  ]
];

Blockly.Blocks['yolouno_neopixel_setup'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "yolouno_neopixel_setup",
        "message0": "khởi tạo dây led Neopixel chân %1 số led %3 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "pin",
            "options": digitalPins
          },
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "neo",
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#bf42bf",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Blocks['yolouno_neopixel_color'] = {
  init: function () {
    this.jsonInit({
      "type": "yolouno_neopixel_color",
      "message0": "đổi màu dây led Neopixel %1 %2",
      "args0": [
        { "type": "input_value", "name": "COLOR" },
        { "type": "input_dummy" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#bf42bf",
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks["yolouno_neopixel_effect"] = {
  init: function () {
    this.jsonInit({
      "message0": "dây led chạy hiệu ứng %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "effect",
          "options": [
            [
              "wipe", "wipe_effect()",
            ],
            [
              "dim", "dim_effect()",
            ],
            [
              "twinkle", "twinkle_effect()",
            ],
            [
              "sparkle", "spakle_effect()",
            ],
            [
              "thearter", "theaterChase_effect()",
            ],
            [
              "bounce", "bounce_effect()",
            ],
            [
              "firework", "firework_effect()",
            ],
            [
              "rainbow", "rainbow_effect()",
            ],
            [
              "cycle", "cycle_effect()",
            ],
          ],
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#bf42bf",
      "tooltip": "",
      "helpUrl": "",
    });
  },
};

Blockly.Blocks['neopixel_show_index_rgb_led'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "neopixel_show_index_rgb_led",
        "message0": "đổi màu led thứ %1 thành %2",
        "args0": [
          {
            "type": "input_value",
            "name": "number_led"
          },
          {
            "type": "input_value",
            "name": "color"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#bf42bf",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};



// Any imports need to be reserved words
//Blockly.Python.addReservedWords('neopixel');
//Blockly.Python.addReservedWords('led_strip');
//Blockly.Python.addReservedWords('led_strip');

Blockly.Python['yolouno_neopixel_setup'] = function (block) {
  var pin = block.getFieldValue('pin');
  var number_neo = Blockly.Python.valueToCode(block, 'neo', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_led_strip'] = 'from yolouno_led_strip import *';
  Blockly.Python.definitions_['init_led_strip_' + pin] = 'strips = Led_Strip(' + pin + '_PIN, ' + number_neo + ')';
  // TODO: Assemble Python into code variable.
  var code = "";
  return code;
};

Blockly.Python['yolouno_neopixel_color'] = function (block) {
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "strips.show_index_led(0, hex_to_rgb(" + value_color + "))\n";
  return code;
};

Blockly.Python['yolouno_neopixel_effect'] = function (block) {
  var dropdown_effect = block.getFieldValue('effect');
  var code = 'await strips.' + dropdown_effect + '\n';
  return code;
};

Blockly.Python['neopixel_show_index_rgb_led'] = function (block) {
  var value_number_led = Blockly.Python.valueToCode(block, 'number_led', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'strips.show_index_led(' + value_number_led + ', hex_to_rgb(' + value_color + '))\n';
  return code;
};
