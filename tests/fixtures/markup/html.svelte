<script>
  let count = 1;
  let double = $derived(count * 2);
</script>

<button on:click={() => count++}>
  Count: {count}
</button>
Double is {double}
