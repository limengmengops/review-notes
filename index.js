
// 为了执行 .sh 文件
var child = require('child_process');
 
child.exec('deploy.sh', function(err, sto) {
    console.log(11122);
    console.log(err);
    console.log(sto);//sto才是真正的输出，要不要打印到控制台，由你自己啊
})

console.log(1111);