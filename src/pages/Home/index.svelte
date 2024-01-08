<script lang="ts">
  import { Link } from "svelte-routing";
  import Canvas from "./../../shared/ui/Canvas/index.svelte";
</script>

<main>
  home page
  <Canvas />
  <Link to={"/register"}>
    <button
      class="absolute top-10 right-10 rounded font-sans font-semibold border p-2.5"
      >Зарегестрироваться</button
    >
  </Link>
</main>
