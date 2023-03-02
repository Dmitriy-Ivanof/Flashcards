const React = require("react");

module.exports = function Question({ roll }) {
  return (
    <div className="die">
      <span className="roll">{roll}</span>
    </div>
  );
};
