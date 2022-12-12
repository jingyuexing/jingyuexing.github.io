(function () {
  window.Canvas2D = {
    rectRound: rectRound,
    star4s: star4s,
    star4: star4,
    star5p: star5p,
    regularPolygon: regularPolygon,
  };
  let canvasv = document.getElementById("contentv");
  let canvas = canvasv.getElementsByTagName("canvas")[0];
  let ctx = null;
  if (canvas.getContext) {
    ctx = canvas.getContext("webgl");
    if (!gl) {
      console.error("此浏览器不支持 WegGL！");
      return;
    }
  }

  function main() {
    ctx.clearColor(32, 34, 123, 1);
    ctx.clear(gl.COLOR_BUFFER_BIT);
    window.requestAnimationFrame(main);
  }

  /**
   * 圆角矩形
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x X 坐标
   * @param {number} y Y 坐标
   * @param {number} h 高度
   * @param {number} w 宽度
   * @param {number} r 圆角半径
   */
  function rectRound(ctx, x, y, h, w, r) {
    const a = Math.PI / 2;
    if (h < 2 * r) r = h / 2;
    if (w < 2 * r) r = w / 2;
    let x0 = x + r, x1 = x + w - r, x2 = x + w,
      y0 = y + r, y1 = y + h - r, y2 = y + h;
    ctx.beginPath();
    ctx.moveTo(x, y0);
    ctx.arc(x0, y0, r, 2 * a, -a, false);
    ctx.lineTo(x1, y);
    ctx.arc(x1, y0, r, -a, 0, false);
    ctx.lineTo(x2, y1);
    ctx.arc(x1, y1, r, 0, a, false);
    ctx.lineTo(x0, y2);
    ctx.arc(x0, y1, r, a, 2 * a, false);
    ctx.closePath();
  }

  /**
   * 四芒星群
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x X 坐标
   * @param {number} y Y 坐标
   * @param {number} w 宽度
   * @param {number} h 高度
   * @param {number} r 星芒半径
   * @param {number} n 数量
   */
  function star4s(ctx, x, y, w, h, r, n) {
    const x0 = x + r, y0 = y + r,
      x1 = x + w - r, y1 = y + h - r;
    for (let i = 0; i < n; i++) {
      star4(ctx, Math.floor(randomInt(x0, x1)), Math.floor(randomInt(y0, y1)), r, "#ffffff");
    }
  }

  /**
   * 四芒星
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x 中心 X 坐标
   * @param {number} y 中心 Y 坐标
   * @param {number} r 星芒半径
   * @param {string} c 颜色
   */
  function star4(ctx, x, y, r, c) {
    ctx.save();
    // 横向星芒
    ctx.strokeStyle = newCLG(x, y, true);
    ctx.beginPath();
    ctx.moveTo(x - r, y);
    ctx.lineTo(x + r, y);
    ctx.stroke();
    // 纵向星芒
    ctx.strokeStyle = newCLG(x, y, false);
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.lineTo(x, y + r);
    ctx.stroke();
    ctx.restore();

    /**
     * 横纵星芒渐变
     * @param {number} x 中心 X 坐标
     * @param {number} y 中心 Y 坐标
     * @param {boolean} isH true 为横向，false 为纵向
     */
    function newCLG(x, y, isH) {
      let clg = isH ? ctx.createLinearGradient(x - r, y, x + r, y) : ctx.createLinearGradient(x, y - r, x, y + r);
      clg.addColorStop(0, "rgba(0,0,0,0)");
      clg.addColorStop(0.5, c);
      clg.addColorStop(1, "rgba(0,0,0,0)");
      return clg;
    }
  }

  /**
   * 正五角星
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x 中心 X 坐标
   * @param {number} y 中心 Y 坐标
   * @param {number} r 半径
   * @param {number} a 旋转弧度，正为右旋，负为左旋
   */
  function star5p(ctx, x, y, r, a = 0) {
    let a0 = a - Math.PI / 2;
    const a1 = Math.PI / 10;
    const r0 = r / 2 / Math.cos(a1);
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    for (let i = 0; i < 9; i++) {
      a0 += a1;
      ctx.lineTo(x + r0 * Math.cos(a0), y + r0 * Math.sin(a0));
      a0 += a1;
      ctx.lineTo(x + r * Math.cos(a0), y + r * Math.sin(a0));
    }
    ctx.closePath();
  }

  /**
   * 正多边形
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x 中心 X 坐标
   * @param {number} y 中心 Y 坐标
   * @param {number} r 半径
   * @param {number} n 边数
   * @param {number} a 旋转角度
   */
  function regularPolygon(ctx, x, y, r, n, a = 0) {
    if (!ctx || n < 3) return;
    let a0 = a - Math.PI / 2;
    const a1 = Math.PI * 2 / n;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a0) * r + x, Math.sin(a0) * r + y);
    for (let i = 0; i < n; i++) {
      a0 += a1;
      ctx.lineTo(r * Math.cos(a0) + x, r * Math.sin(a0) + y);
    }
    ctx.closePath();
  }

  /**
   * 范围内随机浮点数
   * @param {number} a 最小值
   * @param {number} b 最大值
   */
  function randomInt(a, b) {
    return Math.random() * (b - a) + a;
  }
})();
