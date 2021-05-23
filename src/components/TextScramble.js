// ——————————————————————————————————————————————————
// TextScramble

// ——————————————————————————————————————————————————

export class TextScramble {
  constructor(element) {
    this.element = element;
    this.chars = "0123456789abcdefghijklmonpqrstuvwxyz";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    // /** Grab the original text. */
    const oldText = this.element.innerText;

    /** Get the max length for our display string */
    const length = Math.max(oldText.length, newText.length);

    /** Create a promise to do what with ????? */
    const promise = new Promise((resolve) => (this.resolve = resolve));

    /** Create an empty array to store values */
    this.queue = [];

    for (let i = 0; i < length; i++) {
      /** Grab the character at the current index, and for the shorter string add a blank character. */
      const from = oldText[i] || "";
      const to = newText[i] || "";

      /** Generate random numbers */
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);

      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();

    // WHY??? I think it's so the example can be thenable....
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.element.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
