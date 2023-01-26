<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let loading = false

	let todoInputField = '';

	const addTodo: SubmitFunction = ()=> {
//do something BEFORE the form submits
loading = true

return async ({update})=> {
	//do something AFTER the foprmk submits
	loading = false
	todoInputField = ''
	await update()
}
	}
</script>

<pre>
    {JSON.stringify({ data, form }, null, 2)}
</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form method="POST" action="?/removeTodo" use:enhance>
				<input type="hidden" name="id" value={todo.id} />
				<button class="delete" type="submit"> ⚔ </button>
			</form>
		</li>
	{/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance={addTodo}>
	<input type="text" name="todo" bind:value={todoInputField} placeholder="create a todo" />
	{#if form?.missing}
		<p class="error">This field is Required</p>
	{/if}
	{#if todoInputField.length > 1}<button aria-busy={loading} class:secondary={loading} type="submit">{#if !loading}➕ Add Todo {/if}</button>{/if}
	{#if data.todos.length > 0}<button formaction="?/clearTodos" class="secondary" type="submit"
			>Clear Todos</button
		>{/if}
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
