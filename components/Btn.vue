<template>
	<button
		v-on="$listeners"
		class="px-2 py-1 mb-4 text-white transition duration-200 bg-blue-800 rounded-md shadow-md cursor-pointer hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
	>
		<slot />
	</button>
</template>