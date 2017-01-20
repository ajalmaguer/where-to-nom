import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodListService, Restaurant } from '../food-list.service'

declare var Tone

@Component({
	selector: 'nom-food-picker',
	templateUrl: './food-picker.component.html',
	styleUrls: ['./food-picker.component.css']
})
export class FoodPickerComponent implements OnInit {
	selection: Restaurant = {name: 'Where to nom?', list: null}
	options: Restaurant[]

	picking: boolean = false
	interval: number
	dInterval: number = 20
	count: number
	maxCount: number = 20

	constructor(private listService: FoodListService) {
		
	}

	ngOnInit() {
		this.getAudio()
	}

	pickFood() {
		if (this.picking || this.listService.data.filter((r)=> r.list == 'pick').length < 1) return false

		if (this.listService.data.filter((r)=> r.list == 'pick').length == 1) {
			this.selection = this.listService.data.filter((r)=> r.list == 'pick')[0]
			this.listService.selectOption(this.selection)
			return false
		}

		this.picking = true

		this.options = this.listService.data.filter((restaurant) => {
			return restaurant.list == 'pick'
		})
		this.resetTimer()
		this.timer(()=> {})
	}

	resetTimer() {
		this.interval = 1
		this.count = 0
		this.maxCount = 20 + Math.floor(Math.random()*2)
	}

	timer(callback) {
		this.interval += this.dInterval
		this.count++

		this.selection = this.getNewSelection()

		if (this.count < this.maxCount) {
			setTimeout(() => {
				this.timer(() => this.done())
			}, this.interval)
		} else {
			callback()
		}
	}

	done() {
		let delay = Math.random() * 2000 + 1000
		setTimeout(() => {
			// set to result of api call
			this.picking = false

			this.selection = this.getNewSelection()
			this.listService.selectOption(this.selection)
		}, delay) 
	}

	getNewSelection() {
		let newSelection = this.options[Math.floor(Math.random()*this.options.length)]
		for (var i=0; i < 3; i++ ) {
			if (this.selection == newSelection) {
				newSelection = this.options[Math.floor(Math.random()*this.options.length)]
			}	
		}
		this.playSound()
		return newSelection
	}

	synth: any
	getAudio() {
		this.synth = new Tone.Synth({
			"oscillator" : {
				"type" : "square"
			},
			"envelope" : {
				"attack" : 0.01,
				"decay" : 0.2,
				"sustain" : 0.2,
				"release" : 0.2,
			}
		}).toMaster();
	}

	playSound() {
		this.synth.triggerAttackRelease('A2', '16n');
	}

}

declare var window

// class Beep {
// 	audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// 	// oscillator = this.audioCtx.createOscillator()
// 	// gainNode = this.audioCtx.createGain()

// 	sound1: any = new Audio()
// 	sound2: any = new Audio()
// 	sound3: any = new Audio()
// 	i: number = 0
	
// 	constructor(src: string) {


// 		// this.sound1.src = src
// 		// this.sound2.src = src
// 		// this.sound3.src = src
// 	}

// 	load() {
// 		// this.sound1.load()
// 		// this.sound2.load()
// 		// this.sound3.load()
// 	}

// 	play() {
// 		switch (this.i % 3) {
// 			case 0:
// 				this.sound1.load()
// 				this.sound1.play()
// 				break;
// 			case 1:
// 				this.sound2.load()
// 				this.sound2.play()
// 				break;
// 			case 2:
// 				this.sound3.load()
// 				this.sound3.play()
// 				break;
// 		}
// 		this.i++
// 	}
// }
