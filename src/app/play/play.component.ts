import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service'

@Component({
	selector: 'nom-play',
	templateUrl: './play.component.html',
	styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
	bingoCard: any
	sortedFacts: any = {}

	constructor(private dataService: LocalStorageService) { }

	ngOnInit() {
		this.sortFacts()
		this.bingoCard = this.dataService.data.bingoCard
	}

	generateCard() {
		// emptyCard
		this.bingoCard = this.dataService.getNewBingoCard()

		let sortedFactsCopy = JSON.parse(JSON.stringify(this.sortedFacts))

		for (let key in sortedFactsCopy) {
			console.log('key =', key)
			for (let i = 0; i < 5; i++ ) {
				this.bingoCard[key].push(this.pickFact(sortedFactsCopy, key))
			}
		}
		console.log(this.bingoCard)
	}

	pickFact(facts, columnKey) {
		// var columnKey = columnKey
		let fact
		if (facts.hasOwnProperty(columnKey) && facts[columnKey].length > 0) {
			let randomIndex = Math.floor(facts[columnKey].length * Math.random())
			// console.log('randomIndex =', randomIndex, 'facts["B"]', facts[columnKey])
			fact = facts[columnKey].splice(randomIndex, 1)[0]
			// console.log("fact", fact)
		}
		return fact
	}

	sortFacts() {
		this.dataService.data.facts.forEach(fact => {
			// console.log(fact)
			let column = fact.column
			if (this.sortedFacts.hasOwnProperty(column)) {
				this.sortedFacts[column].push(fact)
			} else {
				this.sortedFacts[column] = []
				this.sortedFacts[column].push(fact)
			}
		})
	}

}
