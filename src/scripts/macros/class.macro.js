// Define the class macro here...
macro class {

  rule {

    $className {
        constructor $cparams $cbody
        $($mname $mparams $mbody) ...
    }

  } => {

    function $className $cparams $cbody

    $($className.prototype.$mname
      = function $mname $mparams $mbody; ) ...

  }

}

export class;