// Define the class macro here...
macro hey {
    case { _ $name } => {
        var pattern = #{$name};
        var asStr = unwrapSyntax(pattern).toString();
        letstx $nameStr = [makeValue('hey ' + asStr + '!', pattern)];
        return #{ console.log($nameStr) };
    }
}

export hey;