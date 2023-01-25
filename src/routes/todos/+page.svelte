<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let todoInputField = '';
</script>

<pre>
    {JSON.stringify({ data, form }, null, 2)}
</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form method="POST" action="?/removeTodo">
				<input type="hidden" name="id" value={todo.id} />
				<button class="delete" type="submit"> ⚔ </button>
			</form>
		</li>
	{/each}
</ul>

<form method="POST" action="?/addTodo">
	<input type="text" name="todo" bind:value={todoInputField} />
	{#if form?.missing}
		<p class="error">This field is Required</p>
	{/if}
	{#if todoInputField.length > 0}<button type="submit">➕ Add Todo</button>{/if}
	<button formaction="?/clearTodos" class="secondary" type="submit">Clear Todos</button>
</form>

{#if form?.success}
	<p>Added todo! 😁</p>
{/if}

<style>
	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
	}
</style>
