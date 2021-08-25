'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		const { ctx } = this;
		const { id } = ctx.query;
		// console.log(999, ctx.query)
		ctx.body = id;
	}
	async user() {
		const { ctx } = this;
		// const {id} = ctx.params;
		// ctx.body = id;
		console.log(99, ctx.service)
		const {name, age} = await ctx.service.home.user()
		ctx.body = {
			name,
			age
		};
	}
	async add() {
		const {ctx} = this;
		const {title} = ctx.request.body;
		ctx.body = {
			title
		};
	}
}

module.exports = HomeController;
