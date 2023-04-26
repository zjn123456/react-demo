/**
 * 文件流下载方法
 */
const downBlob = (result: any) => {
  const { data, response } = result;
  //处理后台返回错误信息
  /*  if (data.type.indexOf('application/json') != -1) {
    //blob数据流转为json格式
    const reader = new FileReader();

    reader.onload = function () {
      const { msg } = JSON.parse(reader['result'] as any); //此处的msg就是后端返回的msg内容

      message.error(msg);
    };

    reader.readAsText(data);

    return;
  }*/
  //headers需要get方法获取
  let name = response.headers.get('content-disposition');

  name = name.split('filename=')[1];
  name = eval(name);
  name = decodeURI(name);

  const blob = new Blob([data], {
    // type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    // type: 'application/vnd.ms-excel',
    // type: 'application/octet-stream',
  });

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', name);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { downBlob };
