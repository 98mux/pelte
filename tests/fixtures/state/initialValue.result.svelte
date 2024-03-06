<script>
  // @ts-nocheck
  let notReactive = $state(true);

  let foo = $state("bar");

  let count = $state(0);

  let object = $state({
    foo: "bar",
    baz: "qux",
  });

  let array = $state([1, 2, 3, 4, 5]);
</script>
