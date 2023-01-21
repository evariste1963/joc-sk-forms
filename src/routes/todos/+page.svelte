<script >
	// import type { PageData } from "../$types";

// 	type Data = {
//     success: boolean
//     errors: Record<string, string>
// }

  
   /**
	 * @type {{ todos: any; }}
	 */
    export let data


//    let form: Data

// todo 
 async function addTodo() {}


//todo
async function removeTodo() {}

</script>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<ul>
    {#each data.todos as todo}
    <li>
        <span>{todo.text}</span>
        <form on:submit|preventDefault={removeTodo} method="POST">
            <input type="hidden" name="id" value={todo.id}>
        <button class="delete" type="submit" > X </button>
        </form>
    </li>
        
    {/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
    <input type="text" name="todo" >
<button  type="submit" > + Add Todo </button>
</form>

<style>
ul {
    padding:0;
}

li {
    display:flex;
    justify-content: space-between;
    align-items: center;
}

span{
    text-transform: capitalize;
}

.delete{
    margin:0;
    background: none;
    border:none
}

</style>