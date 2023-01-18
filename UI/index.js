const fs = require('fs');
const fsPromises = fs.promises;
const express = require('express');
const app = express();
const path = require('path');
const Pageres = require('pageres');
const Jimp = require("jimp")

const nameTable = {
	'main_menu.html': {file: 121, pressed: 155},
	'about.html': {file: 133, pressed: -1},
	'axis.html': {file: 128, pressed: 162},
	'control.html': {file: 127, pressed: 161},
	'control_light.html': {file: 209, pressed: 210},
	'filament.html': {file: 139, pressed: 157},
	'files_list.html': {file: 122, pressed: 156},
	'leveling.html': {file: 136, pressed: 167},
	'number_input.html': {file: 6, pressed: 40},
	'power_cut.html': {file: 173, pressed: 174},
	'preheat.html': {file: 138, pressed: 169},
	'prepare.html': {file: 135, pressed: 166},
	'printing.html': {file: 124, pressed: 158},
	'printing_paused.html': {file: 123, pressed: 214},
	'printing_settings.html': {file: 125, pressed: 159},
	'printing_settings_light.html': {file: 212, pressed: 159},
	'speed.html': {file: 130, pressed: 164},
	'system.html': {file: 131, pressed: 165},
	'system_muted.html': {file: 170, pressed: 165},
	'temperature.html': {file: 129, pressed: 163},
	'zoffset.html': {file: 137, pressed: 168},
	'msg_operation_performed.html': {file: 140, pressed: -1},
	'msg_nozzle_temp_abnormal.html': {file: 141, pressed: -1},
	'msg_print_finished.html': {file: 142, pressed: -1},
	'msg_stopping_print_cache.html': {file: 143, pressed: -1},
	'msg_stop_adjust.html': {file: 144, pressed: -1},
	'msg_insufficient_filament.html': {file: 145, pressed: -1},
	'msg_printer_running.html': {file: 146, pressed: -1},
	'msg_confirm_stop.html': {file: 147, pressed: -1},
	'msg_pause_failed.html': {file: 148, pressed: -1},
	'msg_no_sdcard.html': {file: 149, pressed: -1},
	'msg_filament_change_heating.html': {file: 150, pressed: -1},
	'msg_stop_failed.html': {file: 151, pressed: -1},
	'msg_pausing_print_cache.html': {file: 152, pressed: -1},
	'msg_autoleveling_start.html': {file: 153, pressed: -1},
	'msg_autoleveling.html': {file: 154, pressed: -1},
	'msg_preheating.html': {file: 175, pressed: -1},
	'msg_homing.html': {file: 189, pressed: -1},
	'msg_bed_heater_abnormal.html': {file: 190, pressed: -1},
	'msg_bed_ntc_abnormal.html': {file: 191, pressed: -1},
	'msg_nozzle_heater_abnormal.html': {file: 192, pressed: -1},
	'msg_nozzle_ntc_abnormal.html': {file: 193, pressed: -1},
	'msg_homing_x_failed.html': {file: 194, pressed: -1},
	'msg_homing_y_failed.html': {file: 195, pressed: -1},
	'msg_homing_z_failed.html': {file: 196, pressed: -1},
	'msg_autoleveling_failed.html': {file: 200, pressed: -1},
	'msg_autoleveling_calibration.html': {file: 204, pressed: -1},
	'msg_autoleveling_calibration_success.html': {file: 205, pressed: -1},
	'msg_autoleveling_calibration_failed.html': {file: 206, pressed: -1},
	'icon_0.1mm.html': {file: 216, pressed: -1, size: '70x38'},
	'icon_1mm.html': {file: 217, pressed: -1, size: '70x38'},
	'icon_10mm.html': {file: 218, pressed: -1, size: '70x38'},
	'0': {type: 'blank', size: '272x480'},
	'1': {type: 'blank', size: '272x480'},
	'2': {type: 'blank', size: '272x480'},
	'3': {type: 'blank', size: '272x480'},
	'4': {type: 'blank', size: '272x480'},
	'5': {type: 'blank', size: '272x480'},
	'7': {type: 'blank', size: '272x480'},
	'8': {type: 'blank', size: '272x480'},
	'9': {type: 'blank', size: '272x480'},
	'10': {type: 'blank', size: '272x480'},
	'11': {type: 'blank', size: '272x480'},
	'12': {type: 'blank', size: '272x480'},
	'13': {type: 'blank', size: '272x480'},
	'14': {type: 'blank', size: '272x480'},
	'15': {type: 'blank', size: '272x480'},
	'16': {type: 'blank', size: '272x480'},
	'17': {type: 'blank', size: '272x480'},
	'18': {type: 'blank', size: '272x480'},
	'19': {type: 'blank', size: '272x480'},
	'20': {type: 'blank', size: '272x480'},
	'21': {type: 'blank', size: '272x480'},
	'22': {type: 'blank', size: '272x480'},
	'23': {type: 'blank', size: '272x480'},
	'24': {type: 'blank', size: '272x480'},
	'25': {type: 'blank', size: '272x480'},
	'26': {type: 'blank', size: '272x480'},
	'27': {type: 'blank', size: '272x480'},
	'28': {type: 'blank', size: '272x480'},
	'29': {type: 'blank', size: '272x480'},
	'30': {type: 'blank', size: '272x480'},
	'31': {type: 'blank', size: '272x480'},
	'32': {type: 'blank', size: '272x480'},
	'33': {type: 'blank', size: '272x480'},
	'34': {type: 'blank', size: '272x480'},
	'35': {type: 'blank', size: '272x480'},
	'36': {type: 'blank', size: '272x480'},
	'37': {type: 'blank', size: '272x480'},
	'38': {type: 'blank', size: '272x480'},
	'39': {type: 'blank', size: '272x480'},
	'41': {type: 'blank', size: '272x480'},
	'42': {type: 'blank', size: '272x480'},
	'43': {type: 'blank', size: '272x480'},
	'44': {type: 'blank', size: '272x480'},
	'45': {type: 'blank', size: '272x480'},
	'46': {type: 'blank', size: '272x480'},
	'47': {type: 'blank', size: '272x480'},
	'48': {type: 'blank', size: '272x480'},
	'49': {type: 'blank', size: '272x480'},
	'115': {type: 'blank', size: '272x480'},
	'116': {type: 'blank', size: '272x480'},
	'117': {type: 'blank', size: '272x480'},
	'120': {type: 'blank', size: '272x480'},
	'126': {type: 'blank', size: '272x480'},
	'132': {type: 'blank', size: '272x480'},
	'134': {type: 'blank', size: '272x480'},
	'160': {type: 'blank', size: '272x480'},
	'171': {type: 'blank', size: '272x480'},
	'172': {type: 'blank', size: '272x480'},
	'176': {type: 'blank', size: '272x480'},
	'177': {type: 'blank', size: '272x480'},
	'178': {type: 'blank', size: '272x480'},
	'179': {type: 'blank', size: '272x480'},
	'180': {type: 'blank', size: '272x480'},
	'181': {type: 'blank', size: '272x480'},
	'182': {type: 'blank', size: '272x480'},
	'183': {type: 'blank', size: '272x480'},
	'184': {type: 'blank', size: '272x480'},
	'185': {type: 'blank', size: '272x480'},
	'186': {type: 'blank', size: '272x480'},
	'187': {type: 'blank', size: '272x480'},
	'188': {type: 'blank', size: '272x480'},
	'197': {type: 'blank', size: '272x480'},
	'198': {type: 'blank', size: '272x480'},
	'199': {type: 'blank', size: '272x480'},
	'201': {type: 'blank', size: '272x480'},
	'202': {type: 'blank', size: '272x480'},
	'203': {type: 'blank', size: '272x480'},
	'207': {type: 'blank', size: '272x480'},
	'208': {type: 'blank', size: '272x480'},
	'210': {type: 'blank', size: '272x480'},
	'211': {type: 'blank', size: '272x480'},
	'213': {type: 'blank', size: '272x480'},
	'215': {type: 'blank', size: '272x480'},
}

async function listDir(path) {
	try {
		return fsPromises.readdir(path);
	} catch (err) {
		console.error('Error occurred while reading directory!', err);
	}
}

// Refractor capture() in a class
class Generator {
	#pageres;
	#pages;

	constructor() {
		this.#pageres = new Pageres();
		this.#pageres.dest('./exported/PNG');
		this.pages = {};
	}

	async generate() {
		this.#pages = await listDir('./pages');
		await this.generatePNGs();
		await this.generateBMPs();
	}

	async generatePNGs() {
		for (const page in nameTable) {
			const filenameNoExt = page.slice(0, -5);
			const pageData = nameTable[page];
			const resolution = pageData.size || '272x480';
			if (pageData.type === 'blank') {
				console.log('Adding', 'http://localhost:3000?blank=true&number=' + page);
				this.#pageres.src('http://localhost:3000?blank=true&number=' + page, [resolution], {
					crop: true,
					filename: page
				});
			} else if (pageData) {
				// Base page
				console.log('http://localhost:3000?page=pages/' + filenameNoExt);
				this.#pageres.src('http://localhost:3000?page=pages/' + filenameNoExt, [resolution], {
					crop: true,
					filename: filenameNoExt
				});

				// When pressed if any
				if (pageData.pressed !== -1) {
					this.#pageres.src('http://localhost:3000?page=pages_pressed/' + filenameNoExt, [resolution], {
						crop: true,
						filename: filenameNoExt + '_pressed'
					});
				}
			} else {
				console.log('Unknown page', page);
			}
		}

		// Generate PNGs
		await this.#pageres.run();
		console.log('PNGs generated!');
	}

	async generateBMPs() {
		for (const page in nameTable) {
			const pageData = nameTable[page];
			if (!pageData) console.log(page + ' filename not found in nameTable');
			else {
				const filenameNoExt = pageData.type === 'blank' ? page : page.slice(0, -5);
				if (pageData.type === 'blank') pageData.file = page;  // Too lazy to change the table
				console.log('Generating BMP for', filenameNoExt);
				const image = await Jimp.read('exported/PNG/' + filenameNoExt + '.png');
				image.write('exported/BMP/' + pageData.file + '.bmp');
				if (pageData.pressed && pageData.pressed !== -1) {
					const imagePressed = await Jimp.read('exported/PNG/' + filenameNoExt + '_pressed.png');
					imagePressed.write('exported/BMP/' + pageData.pressed + '.bmp');
				}
			}
		}
		console.log('BMPs generated!');
	}
}

app.get('/', function (req, res) {
	// console.log(req.query);
	if (req.query.blank) {
		res.send(`
			<link rel="stylesheet" type="text/css" href="/css/template.css">
			<link rel="stylesheet" type="text/css" href="/css/theme.css">
			<link rel="stylesheet" type="text/css" href="/css/style.css">
			<p style="padding: 5px;"><strong>` + req.query.number + `</strong></p>
		`);
	}
	else {
		res.sendFile(path.join(__dirname + '/' + req.query.page + '.html'));
	}
});
app.use(express.static(__dirname + '/'));
const server = app.listen(3000, () => {
	new Generator().generate().then(() => {
		console.log('Screenshots exported');
		server.close();
	});
});