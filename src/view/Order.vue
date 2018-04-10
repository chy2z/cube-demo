<template>
	<div class="cubes-layout">
		<header class="cubes-head">
			<h1>订单</h1>
		</header>
		<section class="cubes-content">	 
               <scroll-list-option :value="items1" :type="scrollType"
		             @pulling-down="onPullingDown"
					 @pulling-up="onPullingUp" > 					    
					     <ul slot="item" class="items-wrapper">
							<li @click="selectItem(item,$event)"
							 v-for="item in items1"
							 class="items-item border-1px">
								<div class="icon">
									<img width="57"
									 height="57"
									 src="">
								</div>
								<div class="item-content">
									<h2 class="name">{{item}}</h2>
								</div>
							</li>
						</ul>								
            </scroll-list-option>
		</section>
	</div>
</template>

<script type="text/ecmascript-6">
	import ScrollListOption from './components/scroll-list-option'
	const _data = [
		'I am line 1',
		'I am line 2',
		'I am line 3',
		'I am line 4',
		'I am line 5',
		'I am line 6',
		'I am line 7',
		'I am line 8',
		'I am line 9',
		'I am line 10',
		'I am line 11',
		'I am line 12',
		'I am line 13',
		'I am line 14',
		'I am line 15'
	]

	export default {
		data() {
			return {
				items1: _data,
				itemIndex:_data.length,
				scrollType:"order-scroll"
			}
		},		
		methods: {
			selectItem(item, event) {
				console.log(item);
			},
			onPullingDown(scroll) {				
				console.log("down");
				
				// 模拟更新数据
				setTimeout(() => {
					if(Math.random() > 0.5) {
						// 如果有新数据
						this.items1.unshift(`I am new data: ${+new Date()}`)
					} else {
						// 如果没有新数据
						scroll.forceUpdate()
					}
				}, 1000)
			},
			onPullingUp(scroll) {				
				console.log("up");				
				// 更新数据
				setTimeout(() => {
					if(Math.random() > 0.5) {
						console.log("up111");						
						for(var i=1;i<=5;i++){						
						   this.items1.push('I am line ' + ++this.itemIndex);
						}
					} else {
						console.log("up222");
						// 如果没有新数据
						scroll.forceUpdate()
					}
				}, 1000)
			}
		},
		components: {
              ScrollListOption
		}
	}
</script>

<style lang="less">
	.order-scroll {
		&.scroll-option {
			height: 100%;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 5px;
			transform: rotate(0deg);
			overflow: hidden;
		}
		.items-wrapper .items-item {
			display: flex;
			padding: 18px;
			border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		}
		.items-wrapper .items-item:last-child {
			margin-bottom: 0;
		}
		.items-wrapper .items-item .icon {
			flex: 0 0 57px;
			margin-right: 10px;
		}
		.items-wrapper .items-item .item-content {
			flex: 1;
		}
		.items-wrapper .items-item .item-content .name {
			margin: 2px 0 8px 0;
			height: 14px;
			line-height: 14px;
			font-size: 14px;
			color: #07111b;
		}
	}
</style>
