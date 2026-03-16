//## Soal 3

//```js
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let result = [];
  let a = [],
    b = [],
    c = [],
    d = [],
    e = [],
    f = [],
    g = [],
    h = [],
    abjadI = [],
    j = [],
    k = [],
    l = [],
    m = [],
    n = [],
    o = [],
    p = [],
    q = [],
    r = [],
    s = [],
    t = [],
    u = [],
    v = [],
    w = [],
    x = [],
    y = [],
    z = [];
  for (let i = 0; i < animals.length; i++) {
    switch (animals[i][0]) {
      case "a":
        a.push(animals[i]);
        break;

      case "b":
        b.push(animals[i]);
        break;

      case "c":
        c.push(animals[i]);
        break;

      case "d":
        d.push(animals[i]);
        break;

      case "e":
        e.push(animals[i]);
        break;

      case "f":
        f.push(animals[i]);
        break;

      case "g":
        g.push(animals[i]);
        break;

      case "h":
        h.push(animals[i]);
        break;

      case "i":
        abjadI.push(animals[i]);
        break;

      case "j":
        j.push(animals[i]);
        break;

      case "k":
        k.push(animals[i]);
        break;

      case "l":
        l.push(animals[i]);
        break;

      case "m":
        m.push(animals[i]);
        break;

      case "n":
        n.push(animals[i]);
        break;

      case "o":
        o.push(animals[i]);
        break;

      case "p":
        p.push(animals[i]);
        break;

      case "q":
        q.push(animals[i]);
        break;

      case "r":
        r.push(animals[i]);
        break;

      case "s":
        s.push(animals[i]);
        break;

      case "t":
        t.push(animals[i]);
        break;

      case "u":
        u.push(animals[i]);
        break;

      case "v":
        v.push(animals[i]);
        break;

      case "w":
        w.push(animals[i]);
        break;

      case "x":
        x.push(animals[i]);
        break;

      case "y":
        y.push(animals[i]);
        break;

      case "z":
        z.push(animals[i]);
        break;

      default:
        console.log("Invalid input");
    }
  }

  result.push(
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    abjadI,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z
  );

  return result.filter((subArray) => subArray.length > 0);
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
//```

//soal no 1 dan 3 itu menjadi obstacle tersulit wkwk
