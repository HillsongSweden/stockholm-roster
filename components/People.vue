<template>
	<table-cell :class="{ 'bg-yellow-100 italic': !people.length }" class="space-y-1">
		 <template v-for="person in people" v-if="people.length">
			 <div :class="{
				 'text-red-500 italic line-through': person.status === 'D',
				 'text-yellow-500 italic': person.status === 'U',
				}">
				<img :src="person.photo_thumbnail" class="hidden w-6 h-6 border-2 rounded-full shadow-lg md:inline" :class="{
					'border-red-500': person.status === 'D',
					'border-green-500': person.status === 'C',
					'border-yellow-500': person.status === 'U',
				}"> {{
					person.name
				}}
			</div>
		</template>
		<span v-else>N/A</span>
	</table-cell>
</template>

<script>
export default {
	props: {
		people: Array
	}
}
</script>