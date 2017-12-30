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
        TMap('Z4TBZ-XYKCW-RESRR-OGN45-WSMI5-AFBVL').then(qq => {
            var map = new qq.maps.Map(document.getElementById("container"), {
                // 地图的中心地理坐标。
                center: new qq.maps.LatLng(39.916527, 116.397128),
                zoom: 18
            });
        });
    },
    methods: {
    	 postData () {
    		this.$http({
     		method: 'post',
      		url: '/user',
      		data: {
        		name: 'xiaoming',
        		info: '12'
      		}
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