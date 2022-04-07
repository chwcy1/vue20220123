import axios from 'axios'

export function exportMethod_csv(data) {
    axios({
        method: data.method,
        headers:{
          'Authorization' : localStorage.getItem("token"),
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        url: `${data.url}${data.params ? '?' + data.params : ''}`,
        // responseType: 'blob'
    }).then((res) => {
      console.log(res)
        const link = document.createElement('a')
        res.data = "\ufeff" + res.data
        let blob = new Blob([res.data], {type: 'text/csv,charset=UTF-8'})
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob)

        // link.download = res.headers['content-disposition'] //下载后文件名
        link.download = data.fileName //下载的文件名
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }).catch(error => {
        this.$Notice.error({
            title: '错误',
            desc: '网络连接错误'
        })
        console.log(error)
    })
}
export function exportMethod(data) {
    axios({
        method: data.method,
        headers:{
          'Authorization' : localStorage.getItem("token"),
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        url: `${data.url}${data.params ? '?' + data.params : ''}`,
        responseType: 'blob'
    }).then((res) => {
      console.log(res)
        const link = document.createElement('a')
        let blob = new Blob([res.data], {type: 'application/vnd.ms-excel'})
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob)

        // link.download = res.headers['content-disposition'] //下载后文件名
        link.download = data.fileName //下载的文件名
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }).catch(error => {
        this.$Notice.error({
            title: '错误',
            desc: '网络连接错误'
        })
        console.log(error)
    })
}