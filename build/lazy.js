"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import '@babel/polyfill';
var ytLazy =
/*#__PURE__*/
function () {
  function ytLazy(options) {
    _classCallCheck(this, ytLazy);

    this.className = options.className;
    this.ytRender();
  }

  _createClass(ytLazy, [{
    key: "ytRender",
    value: function ytRender() {
      var _this = this;

      var getYTLazy = document.querySelectorAll(".".concat(this.className));
      getYTLazy.forEach(function (ytEl) {
        var ytId = ytEl.getAttribute('data-yt-id');
        var ytType = ytEl.getAttribute('data-yt-type');
        var dataYType = document.querySelector("div[data-yt-id=\"".concat(ytId, "\"]"));

        var imgType = _this.ytImageType(parseFloat(ytType));

        dataYType.setAttribute('style', "background-image: url('//i.ytimg.com/vi/".concat(ytId, "/").concat(imgType, "'); background-repeat:no-repeat; background-size: cover; background-position: center;"));
        ytEl.innerHTML = _this.ytButton();
      });
      this.ytTrigger();
    }
    /*
    | Thumbnail Name      | Size (px) | URL                                              |
    |---------------------|-----------|--------------------------------------------------|
    | Player Background   | 480x360   | https://i1.ytimg.com/vi/<VIDEO ID>/0.jpg         |
    | Start               | 120x90    | https://i1.ytimg.com/vi/<VIDEO ID>/1.jpg         |
    | Middle              | 120x90    | https://i1.ytimg.com/vi/<VIDEO ID>/2.jpg         |
    | End                 | 120x90    | https://i1.ytimg.com/vi/<VIDEO ID>/3.jpg         |
    | High Quality        | 480x360   | https://i1.ytimg.com/vi/<VIDEO ID>/hqdefault.jpg |
    | Medium Quality      | 320x180   | https://i1.ytimg.com/vi/<VIDEO ID>/mqdefault.jpg |
    | Normal Quality      | 120x90    | https://i1.ytimg.com/vi/<VIDEO ID>/default.jpg   |
    */

  }, {
    key: "ytImageType",
    value: function ytImageType(type) {
      var imgType = '';

      switch (type) {
        case 0:
          imgType = 'default.jpg';
          break;

        case 1:
          imgType = '0.jpg';
          break;

        case 2:
          imgType = '1.jpg';
          break;

        case 3:
          imgType = '2.jpg';
          break;

        case 4:
          imgType = '3.jpg';
          break;

        case 5:
          imgType = 'hqdefault.jpg';
          break;

        case 6:
          imgType = 'mqdefault.jpg';
          break;
      }

      return imgType;
    }
  }, {
    key: "ytButton",
    value: function ytButton() {
      return " \n      <div class=\"ytLazy__thumbnail\">\n        <div class=\"ytLazy__img\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" class=\"ytLazy__img--svg\" viewBox=\"0 0 32 32\">\n            <path d=\"M31.327 8.273a4.026 4.026 0 0 0-2.756-2.777l-.028-.007c-2.493-.668-12.528-.668-12.528-.668s-10.009-.013-12.528.668A4.026 4.026 0 0 0 .71 8.245l-.007.028C.26 10.554.007 13.176.007 15.858v.163-.008.126c0 2.682.253 5.304.737 7.845l-.041-.26a4.026 4.026 0 0 0 2.756 2.777l.028.007c2.491.669 12.528.669 12.528.669s10.008 0 12.528-.669a4.026 4.026 0 0 0 2.777-2.756l.007-.028c.425-2.233.668-4.803.668-7.429l-.001-.297v.015l.001-.31c0-2.626-.243-5.196-.708-7.687l.04.258zM12.812 20.801V11.21l8.352 4.803z\" />\n          </svg>\n        </div>\n      </div>\n    ";
    }
  }, {
    key: "ytTrigger",
    value: function ytTrigger() {
      var _this2 = this;

      var getYTLazy = document.querySelectorAll(".".concat(this.className));
      getYTLazy.forEach(function (video) {
        video.addEventListener('click', function (event) {
          event.preventDefault();
          var ytItem = event.target.closest('.ytLazy__item');
          var ytId = ytItem.getAttribute('data-yt-id');
          var ytPlay = ytItem.getAttribute('data-play');

          _this2.ytLightbox(ytId, ytPlay === 'true' ? '?autoplay=1' : '');
        });
      });
    }
  }, {
    key: "ytLightbox",
    value: function ytLightbox(ytId, ytPlay) {
      console.log("www.youtube.com/embed/".concat(ytId, "?autoplay=1&volume=0"));
      var imgFile = "\n      <div class=\"ytLight-wrap\">\n        <div class=\"ytLight-container\">\n            <div class=\"ytLight-iframe\">\n              <iframe src=\"//www.youtube.com/embed/".concat(ytId, "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n            <button type=\"button\" class=\"ytLight-close\" title=\"Close\">\xD7</button>\n        </div>\n      </div>\n    ");
      var lightboxDiv = document.createElement('div');
      lightboxDiv.setAttribute('class', 'ytLight');
      setTimeout(function () {
        return lightboxDiv.classList.add('is-open');
      }, 1);
      lightboxDiv.innerHTML = imgFile;
      document.body.appendChild(lightboxDiv);
      this.ytLightboxClose();
    }
  }, {
    key: "ytLightboxClose",
    value: function ytLightboxClose() {
      var ytLight = document.querySelector('.ytLight');
      window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
          ytLight.remove();
        }
      });
      document.querySelector('.ytLight-close').addEventListener('click', function (event) {
        event.stopPropagation();
        ytLight.remove();
      });
    }
  }]);

  return ytLazy;
}();

var options = {
  className: 'ytLazy__item'
};
document.addEventListener('DOMContentLoaded', new ytLazy(options));