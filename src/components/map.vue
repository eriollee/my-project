<template>
	<div>
	    <div id="search">
	    	<input id="searchInput" type="text" name="">
	    </div>
	    <div id="container">
	    </div>
    </div>
</template>
<script>
import { TMap } from '../TMap'


export default {
    data( ) {
        return {
        }
    },
    mounted() {
        this.getFocusList();

        TMap('Z4TBZ-XYKCW-RESRR-OGN45-WSMI5-AFBVL').then(qq => {
            var map = new qq.maps.Map(document.getElementById("container"), {
                // 地图的中心地理坐标。
                center: new qq.maps.LatLng(39.916527, 116.397128),
                zoom: 18
            });
        });
    },
    methods: {
    	 getFocusList(){                   //http get请求data.json 的数据  
                var vm = this;  
                this.$http.get('http://localhost:8011/hello')  
                    .then(function(res){  
                        console.log(res);
                        vm.focusList = res.data;  
                    })  
                    .catch(function(err){  
                        console.log(err)  
                    })  
        }  
    },
    created: function () {
    }
}
</script>
<style>
#container  {
    min-width:600px;
    min-height:667px;
}
#search #searchInput {
    min-width:600px;
}
</style>