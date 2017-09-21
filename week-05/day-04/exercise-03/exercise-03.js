function MyPromise(fn) {
  this.value;
  this.status = 'pending';
  this.resolveFunc = function() {};
  this.rejectFunc = function() {};
  fn(this.resolv.bind(this), this.reject.bind(this));

}

MyPromise.prototype.resolve = function(val) {
  var self = this;
  if(this.status == "pending"){
    this.status = "resolved";
    this.value = val;
    setTimeout(function(){
      self.resolveFunc(self.value);
    },0);

  }
  
}

MyPromise.prototype.reject = function(val) {
  var self = this;
  if(this.status == "pending") {
    this.status = "rejected";
    this.value = val;
    setTimeout(function(){
      self.rejectFunc(self.value);
    },0);
  }
}

MyPromise.prototype.then = function(resolveFunc, rejectFunc) {
  this.resolveFunc = resolveFunc;
  this.rejectFunc = rejectFunc;
}

var fn = function(resolve, reject) {
  console.log('begin to execute');
  var number = Math.random();
  if(number <= 0.5) {
    resolve('less than 0.5');
  }else {
    reject('great than 0.5');
  }
}

var p = new Promise(fn);
p.then(function(data) {
  console.log("resolve: ", data);
},function(data) {
  console.log('reject: ', data);
});