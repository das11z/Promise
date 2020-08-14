class Promsic {
	constructor (fn) {
		fn (this.resolve.bind(this), this.reject.bind(this))
	}

	state = 'pending'
	success = null
	fail = null

	resolve (response) {
		setTimeout(() => {
			this.state = 'fulfilled'
			this.success(response)
		})
	}

	reject (err) {
		setTimeout(() => {
			this.state = 'rejected'
			this.fail(err)
		})
	}

	then (success, fail) {
		this.success = success
		this.fail = fail
	}
}
