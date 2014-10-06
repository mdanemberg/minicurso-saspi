myApp.controller('alunoController', function($scope) {
  $scope.alunos = [
    {name: 'Matheus', age: 21},
    {name: 'Mateus', age: 25},
    {name: 'Adão', age: 26},
    {name: 'José', age: 40}
  ];

  $scope.adicionarAluno = function() {
    $scope.alunos.push({name: $scope.novoAlunoNome, age: $scope.novoAlunoIdade});
  };

  $scope.removerAluno = function(aluno) {
    $scope.alunos.splice($scope.alunos.indexOf(aluno), 1);
  };
});
