<script lang="ts">
  import { Link } from "svelte-routing";
  import { api } from "../../shared/api";
  import { errorLogger } from "../../shared/utils/logger";
  import { loginSchema } from "../../shared/utils/schema.ts";
  import src from "../../shared/assets/logo.svg";
  import type { ISignInValumes } from "./types.ts";

  let values: ISignInValumes = {} as ISignInValumes;

  const submitHandler = () => {
    loginSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        // TODO: CHANGE URL
        api.post("", values);
      })
      .catch((e) => errorLogger(e));
  };
</script>

<div class="h-4/6 w-3/6">
  <Link
    to={"/"}
    class="absolute top-10 left-10 rounded-full font-sans font-semibold border p-2.5"
  >
    <img {src} width="30px" height="30px" alt="logo" />
  </Link>
  <h1 class="text-4xl font-sans font-semibold mb-6">Вход</h1>
  <form on:submit|preventDefault={submitHandler}>
    <div>
      <input
        class="border rounded mt-4 px-8 h-12 align-center flex w-full"
        type="text"
        name="email"
        bind:value={values.email}
        placeholder="Your email"
      />
    </div>
    <div>
      <input
        class="border rounded mt-4 px-8 h-12 align-center flex w-full"
        type="password"
        name="password"
        bind:value={values.password}
        placeholder="Password"
      />
    </div>
    <div>
      <button
        class="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white my-4 rounded font-sans font-semibold"
        type="submit">Войти</button
      >
    </div>
  </form>

  <Link to={"/register"}>
    <button
      class="absolute top-10 right-10 rounded font-sans font-semibold border p-2.5"
      >Зарегестрироваться</button
    >
  </Link>
</div>
