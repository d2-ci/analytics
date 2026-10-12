"use strict";

var _expressions = require("../expressions.js");
test('matches numbers and operators', () => {
  expect((0, _expressions.parseExpression)('1+2-3*4/5')).toEqual(['1', '+', '2', '-', '3', '*', '4', '/', '5']);
});
test('matches #{} with letters, numbers and operators', () => {
  expect((0, _expressions.parseExpression)('#{abc123}+100-200*300/400')).toEqual(['#{abc123}', '+', '100', '-', '200', '*', '300', '/', '400']);
});
test('matches numbers and operators with brackets', () => {
  expect((0, _expressions.parseExpression)('1+(2-3)*4/5')).toEqual(['1', '+', '(', '2', '-', '3', ')', '*', '4', '/', '5']);
});
test('matches #{} with letters, numbers and operators with brackets', () => {
  expect((0, _expressions.parseExpression)('(100-200)+#{abc123}*300/400')).toEqual(['(', '100', '-', '200', ')', '+', '#{abc123}', '*', '300', '/', '400']);
});
test('matches #{} with numbers and operators with brackets', () => {
  expect((0, _expressions.parseExpression)('#{123}+(10-200)*3000/40000')).toEqual(['#{123}', '+', '(', '10', '-', '200', ')', '*', '3000', '/', '40000']);
});
test('matches #{} with letters and numbers only', () => {
  expect((0, _expressions.parseExpression)('#{abc123}')).toEqual(['#{abc123}']);
});
test('matches #{} with numbers only', () => {
  expect((0, _expressions.parseExpression)('#{123}')).toEqual(['#{123}']);
});
test('matches #{} with letters only', () => {
  expect((0, _expressions.parseExpression)('#{abc}')).toEqual(['#{abc}']);
});
test('matches #{} with no input', () => {
  expect((0, _expressions.parseExpression)('')).toEqual([]);
});
test('matches multiple #{} with operators', () => {
  expect((0, _expressions.parseExpression)('#{abc123}+#{def456}')).toEqual(['#{abc123}', '+', '#{def456}']);
});
test('matches multiple #{} containing dots with operators', () => {
  expect((0, _expressions.parseExpression)('#{abc123.xyz999}+#{def456.xyz999}')).toEqual(['#{abc123.xyz999}', '+', '#{def456.xyz999}']);
});
test('matches multiple #{} with operators with brackets', () => {
  expect((0, _expressions.parseExpression)('(#{abc123}/#{def456})*#{ghi789}')).toEqual(['(', '#{abc123}', '/', '#{def456}', ')', '*', '#{ghi789}']);
});
test('matches on decimal numbers', () => {
  expect((0, _expressions.parseExpression)('#{abc123}*1.2/#{def456}')).toEqual(['#{abc123}', '*', '1.2', '/', '#{def456}']);
});
test('matches on decimal numbers with #{} containing dots', () => {
  expect((0, _expressions.parseExpression)('1.2+#{abc123.xyz999}')).toEqual(['1.2', '+', '#{abc123.xyz999}']);
});