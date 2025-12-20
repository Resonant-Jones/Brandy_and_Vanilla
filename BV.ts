<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Dominican Holiday Kitchen – Coquito, Pasteles & Chocolate Houses</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Handmade Dominican holiday treats: coquito, pasteles, and chocolate houses crafted with love, tradition, and old-school Caribbean flavor."
  />
  <style>
    :root {
      --bg: #05060a;
      --bg-alt: #0c0f14;
      --card: #12151d;
      --accent: #e3b341;
      --accent-soft: rgba(227, 179, 65, 0.12);
      --accent-red: #e65b4f;
      --text: #f5f5f7;
      --muted: #a7adb9;
      --border-soft: rgba(255, 255, 255, 0.08);
      --radius-lg: 18px;
      --radius-md: 12px;
      --shadow-soft: 0 18px 40px rgba(0, 0, 0, 0.55);
      --shadow-subtle: 0 10px 26px rgba(0, 0, 0, 0.45);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Segoe UI", sans-serif;
      background: radial-gradient(circle at top, #181c24 0, #05060a 46%, #000 100%);
      color: var(--text);
      -webkit-font-smoothing: antialiased;
    }

    .page {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: 20px 14px 40px;
    }

    main {
      width: 100%;
      max-width: 980px;
      background: linear-gradient(145deg, #0b0e14, #05060a 55%, #11141c);
      border-radius: 28px;
      box-shadow: var(--shadow-soft);
      border: 1px solid rgba(255, 255, 255, 0.04);
      padding: 20px;
      position: relative;
      overflow: hidden;
    }

    /* subtle top glow */
    main::before {
      content: "";
      position: absolute;
      inset: -40%;
      background:
        radial-gradient(circle at 10% -10%, rgba(227, 179, 65, 0.25), transparent 55%),
        radial-gradient(circle at 80% -40%, rgba(230, 91, 79, 0.18), transparent 60%);
      opacity: 0.65;
      pointer-events: none;
      mix-blend-mode: screen;
    }

    .main-inner {
      position: relative;
      z-index: 1;
    }

    header {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 28px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 999px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: rgba(6, 10, 20, 0.9);
      border: 1px solid rgba(227, 179, 65, 0.5);
      color: var(--accent);
      align-self: flex-start;
    }

    .badge span {
      display: inline-flex;
      width: 18px;
      height: 18px;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 10%, #ffffff, #e65b4f);
      color: #05060a;
      font-size: 11px;
    }

    .hero {
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(0, 2.8fr);
      gap: 22px;
      align-items: center;
    }

    .hero-text h1 {
      font-size: clamp(26px, 4vw, 34px);
      line-height: 1.15;
      margin: 0 0 10px;
    }

    .hero-text h1 span {
      color: var(--accent);
    }

    .hero-subtitle {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
      max-width: 32rem;
    }

    .hero-callout {
      margin-top: 14px;
      font-size: 13px;
      color: var(--accent);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .hero-callout::before {
      content: "";
      width: 26px;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(227, 179, 65, 0.9));
      border-radius: 999px;
    }

    .hero-media {
      background: radial-gradient(circle at top left, #2a323f, #05060a);
      border-radius: 22px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: var(--shadow-subtle);
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .hero-media img {
      width: 100%;
      border-radius: 18px;
      display: block;
      object-fit: cover;
      max-height: 260px;
    }

    .media-caption {
      font-size: 11px;
      color: var(--muted);
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
    }

    .media-caption strong {
      color: var(--accent);
      font-weight: 600;
    }

    .media-pill {
      padding: 4px 8px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(3, 6, 12, 0.85);
      font-size: 10px;
    }

    .layout {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.8fr);
      gap: 22px;
      margin-top: 28px;
      align-items: flex-start;
    }

    section {
      background: radial-gradient(circle at top left, #181c26, #05060a);
      border-radius: var(--radius-lg);
      padding: 16px 14px 14px;
      border: 1px solid var(--border-soft);
      box-shadow: var(--shadow-subtle);
    }

    section h2 {
      margin: 0 0 10px;
      font-size: 16px;
    }

    section p {
      margin: 0 0 10px;
      font-size: 13px;
      color: var(--muted);
      line-height: 1.5;
    }

    .menu-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
      margin-top: 8px;
    }

    .menu-item {
      padding: 10px;
      border-radius: var(--radius-md);
      background: linear-gradient(145deg, #10141d, #05060a);
      border: 1px solid rgba(255, 255, 255, 0.06);
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 6px 12px;
      align-items: baseline;
      font-size: 13px;
    }

    .menu-item h3 {
      margin: 0;
      font-size: 14px;
    }

    .menu-item small {
      display: block;
      color: var(--muted);
      margin-top: 2px;
    }

    .price {
      text-align: right;
      font-weight: 600;
      color: var(--accent);
      font-size: 13px;
    }

    .price span {
      display: block;
      color: var(--muted);
      font-weight: 400;
      font-size: 11px;
    }

    .limited-note {
      margin-top: 10px;
      padding: 8px 10px;
      border-radius: var(--radius-md);
      font-size: 12px;
      background: var(--accent-soft);
      border: 1px solid rgba(227, 179, 65, 0.4);
      color: #f8f3e3;
    }

    .limited-note strong {
      color: var(--accent);
    }

    /* form */
    form {
      display: grid;
      gap: 10px;
      font-size: 13px;
    }

    .form-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 10px;
    }

    label {
      display: block;
      font-weight: 500;
      margin-bottom: 3px;
    }

    .field {
      margin-bottom: 4px;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 8px 9px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: rgba(4, 7, 15, 0.9);
      color: var(--text);
      font-family: inherit;
      font-size: 13px;
    }

    input::placeholder,
    textarea::placeholder {
      color: #6e7481;
    }

    textarea {
      min-height: 70px;
      resize: vertical;
    }

    .hint {
      font-size: 11px;
      color: var(--muted);
      margin-top: 2px;
    }

    .inline-options {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 4px;
      font-size: 12px;
    }

    .inline-options label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 400;
      margin: 0;
      padding: 5px 8px;
      border-radius: 999px;
      background: rgba(3, 5, 10, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.14);
      cursor: pointer;
    }

    .inline-options input[type="radio"] {
      accent-color: var(--accent);
    }

    button[type="submit"] {
      margin-top: 4px;
      padding: 10px 14px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: linear-gradient(135deg, var(--accent), #f2cf6b);
      color: #221400;
      box-shadow: 0 13px 28px rgba(0, 0, 0, 0.65);
    }

    button[type="submit"]:hover {
      filter: brightness(1.02);
      transform: translateY(-1px);
    }

    button[type="submit"]:active {
      transform: translateY(0);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.7);
    }

    .footer-note {
      margin-top: 10px;
      font-size: 11px;
      color: var(--muted);
      text-align: left;
    }

    .footer-note strong {
      color: var(--accent);
      font-weight: 500;
    }

    @media (max-width: 800px) {
      main {
        padding: 18px 16px 22px;
        border-radius: 0;
      }

      .hero {
        grid-template-columns: minmax(0, 1fr);
      }

      .layout {
        grid-template-columns: minmax(0, 1fr);
      }

      .form-row {
        grid-template-columns: minmax(0, 1fr);
      }

      .media-caption {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    @media (max-width: 480px) {
      header {
        margin-bottom: 22px;
      }

      .hero-text h1 {
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <main>
      <div class="main-inner">
        <header>
          <div class="badge">
            <span>🎄</span>
            Dominican holiday treats · Limited kitchen pop-up
          </div>
          <div class="hero">
            <div class="hero-text">
              <h1>
                Old-school Caribbean flavor,<br />
                <span>made by Mom & Abuela</span>
              </h1>
              <p class="hero-subtitle">
                Coquito, pasteles, and chocolate houses crafted the way they were
                taught: by hand, with patience, and with the kind of love that
                makes the whole house go quiet when everyone starts eating.
              </p>
              <p class="hero-callout">
                Taking local holiday orders now. When the kitchen is full, orders close.
              </p>
            </div>
            <div class="hero-media">
              <!-- Replace src with your actual photo path -->
              <img
                src="your-photo.jpg"
                alt="Two women smiling in a kitchen, next to a handcrafted holiday chocolate house."
              />
              <div class="media-caption">
                <div><strong>La cocina de la familia</strong><br />Generations of holiday traditions in every batch.</div>
                <div class="media-pill">Handmade in small batches · Local pickup</div>
              </div>
            </div>
          </div>
        </header>

        <div class="layout">
          <!-- MENU / INFO -->
          <section aria-labelledby="menu-heading">
            <h2 id="menu-heading">Holiday menu & pricing</h2>
            <p>
              These aren’t just holiday treats. They’re memories, culture, and
              the flavors your friends will talk about until next year.
              Everything is prepared in limited batches.
            </p>

            <div class="menu-grid">
              <article class="menu-item">
                <div>
                  <h3>Coquito 🥥</h3>
                  <small>Creamy, smooth &amp; dangerously good in the best way.</small>
                </div>
                <div class="price">
                  $25
                  <span>20oz bottle</span>
                </div>
              </article>

              <article class="menu-item">
                <div>
                  <h3>Pasteles 🫔</h3>
                  <small>
                    Handmade, seasoned just right, wrapped with generations of
                    experience.
                  </small>
                </div>
                <div class="price">
                  $6 · 1<br />
                  $25 · 5<br />
                  $50 · 12
                </div>
              </article>

              <article class="menu-item">
                <div>
                  <h3>Chocolate Houses 🍫🏠</h3>
                  <small>
                    Handcrafted, festive, and almost too pretty to eat. Almost.
                  </small>
                </div>
                <div class="price">
                  $60 <span>small</span>
                  $70 <span>medium</span>
                </div>
              </article>
            </div>

            <div class="limited-note">
              <strong>Holiday pop-up:</strong> Orders are open for a short window.
              Once the kitchen schedule is full, that’s it for the season.
            </div>
          </section>

          <!-- ORDER FORM -->
          <section aria-labelledby="order-heading">
            <h2 id="order-heading">Place your order</h2>
            <p>
              Fill out the form and we’ll confirm your order, pickup details, and
              payment method (cash, PayPal, Venmo, or Zelle). No online payments
              here – just good food and a quick message.
            </p>

            <form id="order-form">
              <div class="form-row">
                <div class="field">
                  <label for="name">Your name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                  />
                </div>
                <div class="field">
                  <label for="phone">Phone number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Best number to reach you"
                  />
                </div>
              </div>

              <div class="field">
                <label for="email">Email (optional)</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="If you prefer confirmations by email"
                />
              </div>

              <div class="field">
                <label>Preferred way to confirm</label>
                <div class="inline-options">
                  <label>
                    <input
                      type="radio"
                      name="contactPreference"
                      value="Text message"
                      checked
                    />
                    Text
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="contactPreference"
                      value="Phone call"
                    />
                    Call
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="contactPreference"
                      value="WhatsApp"
                    />
                    WhatsApp
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="contactPreference"
                      value="Email"
                    />
                    Email
                  </label>
                </div>
              </div>

              <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 4px 0 8px;" />

              <div class="form-row">
                <div class="field">
                  <label for="coquitoQty">Coquito (20oz bottles)</label>
                  <input
                    id="coquitoQty"
                    name="coquitoQty"
                    type="number"
                    min="0"
                    inputmode="numeric"
                    placeholder="0"
                  />
                  <p class="hint">$25 per bottle.</p>
                </div>
                <div class="field">
                  <label for="pastelesQty">Pasteles (number of pieces)</label>
                  <input
                    id="pastelesQty"
                    name="pastelesQty"
                    type="number"
                    min="0"
                    inputmode="numeric"
                    placeholder="0"
                  />
                  <p class="hint">$6 for 1 · $25 for 5 · $50 for 12.</p>
                </div>
              </div>

              <div class="form-row">
                <div class="field">
                  <label for="chocHouseSize">Chocolate house size</label>
                  <select id="chocHouseSize" name="chocHouseSize">
                    <option value="">No chocolate house</option>
                    <option value="Small">$60 · Small</option>
                    <option value="Medium">$70 · Medium</option>
                  </select>
                </div>
                <div class="field">
                  <label for="chocHouseQty">Chocolate houses (quantity)</label>
                  <input
                    id="chocHouseQty"
                    name="chocHouseQty"
                    type="number"
                    min="0"
                    inputmode="numeric"
                    placeholder="0"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="field">
                  <label for="pickupDate">Preferred pickup date</label>
                  <input id="pickupDate" name="pickupDate" type="date" />
                </div>
                <div class="field">
                  <label for="pickupTime">Preferred time window</label>
                  <input
                    id="pickupTime"
                    name="pickupTime"
                    type="text"
                    placeholder="e.g. 3–5 PM"
                  />
                </div>
              </div>

              <div class="field">
                <label>Planned payment</label>
                <div class="inline-options">
                  <label>
                    <input type="radio" name="payment" value="Cash" checked />
                    Cash
                  </label>
                  <label>
                    <input type="radio" name="payment" value="PayPal" />
                    PayPal
                  </label>
                  <label>
                    <input type="radio" name="payment" value="Venmo" />
                    Venmo
                  </label>
                  <label>
                    <input type="radio" name="payment" value="Zelle" />
                    Zelle
                  </label>
                </div>
                <p class="hint">
                  Exact handles or QR codes can be shared with you when we confirm.
                </p>
              </div>

              <div class="field">
                <label for="notes">Anything we should know?</label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Allergies, special requests, how you found us, etc."
                ></textarea>
              </div>

              <button type="submit">
                Send my order
                <span aria-hidden="true">🍽️</span>
              </button>

              <p class="footer-note">
                <strong>Note:</strong> This form will open your email app with your
                order details pre-filled. Your order is not final until you hit
                send and receive a confirmation from us.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  </div>

  <script>
    // Set the email address where orders should be sent
    const ORDER_EMAIL = "you@example.com"; // TODO: change this to your email

    const form = document.getElementById("order-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      const name = formData.get("name") || "";
      const phone = formData.get("phone") || "";
      const email = formData.get("email") || "";
      const contactPreference = formData.get("contactPreference") || "";
      const coquitoQty = formData.get("coquitoQty") || "0";
      const pastelesQty = formData.get("pastelesQty") || "0";
      const chocSize = formData.get("chocHouseSize") || "None";
      const chocQty = formData.get("chocHouseQty") || "0";
      const pickupDate = formData.get("pickupDate") || "";
      const pickupTime = formData.get("pickupTime") || "";
      const payment = formData.get("payment") || "";
      const notes = (formData.get("notes") || "").toString().trim();

      const subject = encodeURIComponent("Holiday order request");

      let bodyLines = [];

      bodyLines.push("New holiday order request:");
      bodyLines.push("");
      bodyLines.push("Name: " + name);
      bodyLines.push("Phone: " + phone);
      if (email) bodyLines.push("Email: " + email);
      if (contactPreference)
        bodyLines.push("Preferred contact: " + contactPreference);

      bodyLines.push("");
      bodyLines.push("Order details:");
      bodyLines.push("  Coquito (20oz): " + coquitoQty);
      bodyLines.push("  Pasteles (pieces): " + pastelesQty);
      bodyLines.push("  Chocolate houses: " + chocQty + " (" + chocSize + ")");
      bodyLines.push("");
      if (pickupDate || pickupTime) {
        bodyLines.push("Pickup:");
        if (pickupDate) bodyLines.push("  Date: " + pickupDate);
        if (pickupTime) bodyLines.push("  Time window: " + pickupTime);
        bodyLines.push("");
      }

      if (payment) bodyLines.push("Planned payment method: " + payment);

      if (notes) {
        bodyLines.push("");
        bodyLines.push("Notes:");
        bodyLines.push(notes);
      }

      bodyLines.push("");
      bodyLines.push(
        "Submitted via the Dominican Holiday Kitchen site."
      );

      const body = encodeURIComponent(bodyLines.join("\n"));

      window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
    });
  </script>
</body>
</html>
