<template>
  <div class="home" style="max-width:1100px;margin:auto">
    <div style="font-size: 20px; padding: 10px 0; font-weight: normal; border-bottom: dashed 1px #DCDFE6">
      <!--<span @click="this.$router.push('/Home')"></span>检索系统<span style="padding:0 15px">/</span>-->
      <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td width="1" style="padding-top:3px;padding-right:7px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
              <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </td>
          <td valign="top" align="left">
            数据范围
          </td>
        </tr>
      </table>
    </div>
    <div style="width:100%;padding:10px 0"></div>
    <el-table :data="tableData"
              border
              style="width: 100%" class="datenum">
      <el-table-column prop="code"
                       label="国家代码">
      </el-table-column>
      <el-table-column prop="name"
                       label="数据库名称">
      </el-table-column>
      <el-table-column prop="date"
                       label="数据范围">
      </el-table-column>
      <el-table-column prop="num"
                       label="数据量">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { baseURL } from "../api/base.js";
  import {
    search,
    search_result,
    statistic,
    fav_list_add,
    download_text,
    fav_list,
    fav_list_del
  } from '../api/search.js'
  import { allcountryfl2cn, allcountrycn2fl } from "../assets/country.js";
  let Base64 = require("js-base64").Base64;
  export default {
    data() {
      return {
        baseURL: baseURL,
        type: localStorage.getItem("type"),
        tableData: [
          { code: 'CN', name: '中国发明公开', date: '1985.09.10-2022.01.07', num: '13895925' },
          { code: 'CN', name: '中国实用新型', date: '1985.09.10-2022.01.07', num: '15449049' },
          { code: 'CN', name: '中国外观设计', date: '1985.09.10-2022.01.07', num: '7055961' },
          { code: 'CN', name: '中国发明授权', date: '1985.09.10-2022.01.07', num: '4828202' },
          { code: 'HK', name: '中国香港', date: '1985.01.04-2020.07.17', num: '149752' },
          { code: 'TW', name: '中国台湾', date: '1990.10.11-2021.12.11', num: '2047825' },
          { code: 'JP', name: '日本', date: '1985.01.05-2021.12.09', num: '15396024' },
          { code: 'KR', name: '韩国', date: '1985.02.08-2021.12.10', num: '3813663' },
          { code: 'IN', name: '印度', date: '1985.01.05-2021.08.13', num: '823029' },
          { code: 'SG', name: '新加坡', date: '1985.01.04-2021.06.29', num: '145589' },
          { code: 'ID', name: '印度尼西亚', date: '1988.11.26-2017.04.18', num: '14649' },
          { code: 'PH', name: '菲律宾', date: '1985.01.03-2021.08.09', num: '41759' },
          { code: 'MY', name: '马来西亚', date: '1985.12.31-2018.10.31', num: '52029' },
          { code: 'IL', name: '以色列', date: '1985.01.31-2021.07.29', num: '132775' },
          { code: 'MN', name: '蒙古', date: '1985.06.15-1989.06.15', num: '65' },
          { code: 'TH', name: '泰国', date: '2010.04.08-2021.07.26', num: '130684' },
          { code: 'VN', name: '越南', date: '1985.03.25-2015.01.26', num: '177' },
          { code: 'UZ', name: '乌兹别克斯坦', date: '1997.12.30-2018.12.29', num: '14' },
          { code: 'KZ', name: '哈萨克斯坦', date: '1993.12.10-2019.07.12', num: '64' },
          { code: 'TJ', name: '塔吉克斯坦', date: '1996.07.16-2012.03.28', num: '452' },
          { code: 'TR', name: '土耳其', date: '1985.01.01-2021.06.21', num: '92363' },
          { code: 'AM', name: '亚美尼亚', date: '2004.03.17-2010.04.26', num: '3' },
          { code: 'GE', name: '格鲁吉亚', date: '2000.01.10-2021.07.26', num: '5613' },
          { code: 'WO', name: '世界知识产权组织', date: '1978.10.19-2021.12.09', num: '4240178' },
          { code: 'EP', name: '欧洲专利局', date: '1978.12.20-2021.12.08', num: '4286758' },
          { code: 'GB', name: '英国', date: '1970.01.01-2021.12.01', num: '1137854' },
          { code: 'FR', name: '法国', date: '1970.01.02-2021.12.10', num: '1191003' },
          { code: 'DE', name: '德国', date: '1985.01.03-2021.12.09', num: '2830906' },
          { code: 'CH', name: '瑞士', date: '1970.02.27-2021.08.16', num: '71964' },
          { code: 'RU', name: '俄罗斯', date: '1991.01.23-2021.11.26', num: '1236699' },
          { code: 'AT', name: '奥地利', date: '1985.01.10-2021.06.15', num: '604500' },
          { code: 'BE', name: '比利时', date: '1985.01.02-2021.08.19', num: '37449' },
          { code: 'DK', name: '丹麦', date: '1985.01.02-2021.08.16', num: '248964' },
          { code: 'FI', name: '芬兰', date: '1985.01.01-2021.08.13', num: '111141' },
          { code: 'GR', name: '希腊', date: '1985.01.02-2021.07.09', num: '55058' },
          { code: 'HU', name: '匈牙利', date: '1985.01.28-2021.07.28', num: '125041' },
          { code: 'IE', name: '爱尔兰', date: '1985.01.01-2021.08.04', num: '39462' },
          { code: 'IT', name: '意大利', date: '1985.01.14-2021.06.19', num: '468158' },
          { code: 'LV', name: '拉脱维亚', date: '1993.06.10-2021.07.20', num: '6565' },
          { code: 'NL', name: '荷兰', date: '1979.02.19-2021.08.03', num: '89071' },
          { code: 'NO', name: '挪威', date: '1985.01.02-2021.08.23', num: '155060' },
          { code: 'PL', name: '波兰', date: '1985.01.02-2021.08.02', num: '316092' },
          { code: 'PT', name: '葡萄牙', date: '1985.01.01-2021.07.30', num: '126051' },
          { code: 'ES', name: '西班牙', date: '1985.01.01-2021.08.19', num: '779017' },
          { code: 'SE', name: '瑞典', date: '1985.01.02-2020.12.29', num: '154121' },
          { code: 'UA', name: '乌克兰', date: '1987.01.07-2021.08.18', num: '197098' },
          { code: 'BY', name: '白俄罗斯', date: '1997.09.30-2017.04.30', num: '42' },
          { code: 'BG', name: '保加利亚', date: '1985.01.15-2021.06.30', num: '37793' },
          { code: 'CY', name: '塞浦路斯', date: '1985.03.08-2020.05.29', num: '15965' },
          { code: 'CZ', name: '捷克', date: '1992.12.16-2021.08.18', num: '99929' },
          { code: 'EE', name: '爱沙尼亚', date: '1994.10.17-2021.07.15', num: '7283' },
          { code: 'IS', name: '冰岛', date: '1985.01.17-2020.11.15', num: '5486' },
          { code: 'LT', name: '立陶宛', date: '1992.10.15-2021.08.10', num: '15438' },
          { code: 'LU', name: '卢森堡', date: '1985.03.21-2021.08.13', num: '8455' },
          { code: 'MT', name: '马耳他', date: '1985.01.17-2012.06.30', num: '185' },
          { code: 'MD', name: '摩尔多瓦', date: '1994.01.31-2021.07.31', num: '8756' },
          { code: 'MC', name: '摩纳哥', date: '1985.02.04-2021.06.08', num: '1182' },
          { code: 'RO', name: '罗马尼亚', date: '1985.01.04-2021.07.30', num: '50441' },
          { code: 'SM', name: '圣马力诺', date: '2000.02.16-2017.03.08', num: '2213' },
          { code: 'SK', name: '斯洛伐克', date: '1993.07.07-2021.08.11', num: '31973' },
          { code: 'SI', name: '斯洛文尼亚', date: '1992.11.27-2021.07.30', num: '47492' },
          { code: 'YU', name: '南斯拉夫', date: '1985.03.20-2006.08.17', num: '21521' },
          { code: 'US', name: '美国公开', date: '2001.03.15-2021.12.09', num: '6659278' },
          { code: 'US', name: '美国授权', date: '1975.02.03-2021.12.07', num: '7227788' },
          { code: 'US', name: '美国外观及其他', date: '1860.02.07-2021.12.07', num: '737015' },
          { code: 'MX', name: '墨西哥', date: '1985.01.02-2020.03.03', num: '341577' },
          { code: 'CA', name: '加拿大', date: '1985.01.01-2021.08.24', num: '1384416' },
          { code: 'CR', name: '哥斯达黎加', date: '1988.07.13-2021.06.30', num: '10495' },
          { code: 'CU', name: '古巴', date: '1985.12.16-2021.08.06', num: '4377' },
          { code: 'DO', name: '多米尼加共和国', date: '2001.10.31-2019.11.29', num: '4474' },
          { code: 'SV', name: '萨尔瓦多', date: '1985.03.01-2019.06.13', num: '1911' },
          { code: 'GT', name: '危地马拉', date: '1985.01.01-2019.11.13', num: '6024' },
          { code: 'HN', name: '洪都拉斯', date: '1996.01.19-2015.10.12', num: '1555' },
          { code: 'NI', name: '尼加拉瓜', date: '2003.11.05-2020.12.04', num: '1726' },
          { code: 'PA', name: '巴拿马', date: '1996.05.20-2010.07.27', num: '2386' },
          { code: 'TT', name: '特立尼达和多巴哥', date: '1994.06.16-1995.12.08', num: '3' },
          { code: 'AR', name: '阿根廷', date: '1985.01.31-2021.06.30', num: '119497' },
          { code: 'BR', name: '巴西', date: '1985.01.14-2021.07.06', num: '778264' },
          { code: 'CL', name: '智利', date: '2005.01.07-2021.07.30', num: '31089' },
          { code: 'CO', name: '哥伦比亚', date: '1995.02.13-2021.08.19', num: '33662' },
          { code: 'EC', name: '厄瓜多尔', date: '1990.10.01-2021.06.30', num: '14439' },
          { code: 'PE', name: '秘鲁', date: '1992.04.19-2021.06.30', num: '27784' },
          { code: 'UY', name: '乌拉圭', date: '2000.02.23-2021.06.30', num: '14242' },
          { code: 'AU', name: '澳大利亚', date: '1985.01.03-2021.12.09', num: '1632999' },
          { code: 'NZ', name: '新西兰', date: '1985.01.31-2021.08.27', num: '130112' },
          { code: 'OA', name: '非洲知识产权组织', date: '1985.03.31-2021.06.23', num: '9481' },
          { code: 'ZA', name: '南非', date: '1985.01.03-2021.08.25', num: '192033' },
          { code: 'DZ', name: '阿尔及利亚', date: '2000.09.28-2006.09.06', num: '1513' },
          { code: 'EG', name: '埃及', date: '1985.03.31-2016.06.23', num: '10488' },
          { code: 'KE', name: '肯尼亚', date: '1985.01.04-1989.09.01', num: '422' },
          { code: 'MW', name: '马拉维', date: '1985.02.13-1994.10.12', num: '349' },
          { code: 'MA', name: '摩洛哥', date: '1985.04.01-2021.07.29', num: '21578' },
          { code: 'ZW', name: '津巴布韦', date: '1985.01.16-1995.01.25', num: '1595' },
          { code: 'ZM', name: '赞比亚', date: '1985.01.21-1994.05.25', num: '601' }
        ]
      }
    },
    mounted() {
      try {
        this.$http.get('static/js/countrynum.js').then(res => {
          //alert(JSON.stringify(res.body));
          this.tableData = res.body;
        })
      }
      catch (e) { }
    },
    methods: {
      filterHtml(val) {
        return val.replace(/<[^>]+>/g, '');//去除文字的<...></...>标签
      },

    }
  }
</script>

<style scoped>
  .home {
    padding: 20px;
    width: 80%;
    margin: 0 auto;
  }
  .datenum >>> .el-table__header {
    background: #DCDFE6
  }
</style>
