module.exports = class extends think.Controller {
  async __before() {
    // 根据token值获取用户id
    this.ctx.state.token = this.ctx.header['x-nideshop-token'] || '';
    //console.log('1231231312123312');  
    //console.log(this.ctx.state.token); 
    //let userId = await think.model('user').where({ weixin_openid:'oyEtc5X66df1RqSykjDI9Y9IdcIo' }).getField('id', true);
    //console.log(userId);  
    const tokenSerivce = think.service('token', 'api'); 
    this.ctx.state.userId = await tokenSerivce.getUserId(this.ctx.state.token);

    const publicController = this.config('publicController');
    const publicAction = this.config('publicAction');
    console.log(this.ctx.controller);
    console.log(this.ctx.action);  
    // 如果为非公开，则验证用户是否登录
    const controllerAction = this.ctx.controller + '/' + this.ctx.action;
    if (!publicController.includes(this.ctx.controller) && !publicAction.includes(controllerAction)) {
      if (this.ctx.state.userId <= 0) {
        return this.fail(401, '请先登录');
      }
    }
  }

  /**
   * 获取时间戳
   * @returns {Number}
   */
  getTime() {
    return parseInt(Date.now() / 1000);
  }

  /**
   * 获取当前登录用户的id
   * @returns {*}
   */
  getLoginUserId() {
    return this.ctx.state.userId;
  }
};
